import { Console } from 'console';
import { App, Editor, MarkdownView, Modal, Notice, Plugin, getFrontMatterInfo, FrontMatterInfo, PluginSettingTab, TFile, TFolder, Vault, parseYaml, stringifyYaml } from 'obsidian';
import { Person } from './person';
import MeetingCleanupSettingTab from './meetingCleanupSettings';

interface MeetingCleanupSettings {
	peopleDir: string;
	meetingsDir: string;
	domainCompanyPairs: string[];
}

const DEFAULT_SETTINGS: MeetingCleanupSettings = {
	peopleDir: 'people',
	meetingsDir: 'meetings',
	domainCompanyPairs: []
}

export default class MeetingCleanup extends Plugin {

	settings: MeetingCleanupSettings;
	people: Map<string, Person>;

	async onload() {
		await this.loadSettings();
		this.people = new Map();
		await this.loadPeople();

		const ribbonIconEl = this.addRibbonIcon('mail-check', 'MeetingCleanup Plugin', async (evt: MouseEvent) => {
			await this.loadPeople();
			await this.cleanupMeetings();
			new Notice('Meeting cleanup complete!');
		});

		this.addSettingTab(new MeetingCleanupSettingTab(this.app, this));

		this.app.workspace.onLayoutReady(() => {
			this.registerEvent(
				this.app.vault.on('create', async (file: TFile) => {
					if (file instanceof TFile && file.path.startsWith(this.settings.peopleDir)) {
						await this.loadPeople();
						const personMsg = `New Person Created at: ${file.basename}`;
						new Notice(personMsg);
						await this.cleanupMeetings();
					} else if (file instanceof TFile && file.path.startsWith(this.settings.meetingsDir)) {
						await this.loadPeople();
						await this.cleanupSingleMeeting(file);
					}
				})
			);
		});

		console.log("MeetingCleanup loaded");
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async loadPeople() {
		const peopleDir = 'people';
		const files = this.app.vault.getMarkdownFiles();
		let filtered = files.filter(file => file.path.startsWith(peopleDir));

		for (const file of filtered) {
			const personName = file.basename.replace(/\.md$/, ''); // Remove the .md extension
			const fileContent = await this.app.vault.cachedRead(file);
			const frontmatter = getFrontMatterInfo(fileContent);
			let person = new Person(personName, frontmatter.frontmatter);
			this.people.set(person.email, person);
		}
	}

	async cleanupMeetings() {
		const meetingsDir = this.settings.meetingsDir;
		const files = this.app.vault.getMarkdownFiles()
		const meetingFiles = files.filter(file => file.path.startsWith(meetingsDir));

		for (const file of meetingFiles) {
			await this.cleanupSingleMeeting(file);
			const msg = `Cleaned up meeting: ${file.basename}`;
			new Notice(msg);
		}
	}

	async cleanupSingleMeeting(file: TFile) {
		// Create a map of the domain-company pairs
		const domainCompanyMap = new Map(this.settings.domainCompanyPairs.map((pair: string) => {
			const [domain, company] = pair.split(':').map((s: string) => s.trim());
			return [domain.toLowerCase(), company];
		}));

		// Update the front matter of the file
		await this.app.fileManager.processFrontMatter(file, (frontMatter) => {
			// Check if the organizer tag exists and is an email address
			if (frontMatter.organizer && /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(frontMatter.organizer)) {
				// Get the domain of the organizer email
				//console.log(`ORGANIZER: ${frontMatter.organizer}`);
				const domain = frontMatter.organizer.split('@')[1].toLowerCase();

				// Check if the domain matches one of the domain-company pairs
				if (domainCompanyMap.has(domain)) {
					//console.log(`DOMAIN: ${domain}`);
					frontMatter.company = domainCompanyMap.get(domain);
				}
			}

			return frontMatter;
		});

		// Replace all email addresses with person links
		let newFileContent = await this.app.vault.read(file);
		newFileContent = newFileContent.replace(/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g, (email: string) => {
			const person = this.people.get(email);
			const name = person ? person.name : email;
			const createLink = person ? person.createLink : false;
			// Check if the person exists and the createLink attribute is true
			return person && createLink ? person.createPersonLink() : name;
		});

		await this.app.vault.modify(file, newFileContent);
		const mtgMsg = `New Meeting Created at: ${file.basename}`;
		new Notice(mtgMsg);
	}
}
