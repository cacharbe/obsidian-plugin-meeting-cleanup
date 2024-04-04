import {App, Editor, MarkdownView, Modal, Notice, Plugin, getFrontMatterInfo, FrontMatterInfo, PluginSettingTab, TFile, TFolder, Vault, parseYaml } from 'obsidian';
import MeetingCleanupSettingTab from './meetingCleanupSettings';
import { Person } from './person';

interface MeetingCleanupSettings {
	mySetting: string;
}
const DEFAULT_SETTINGS: MeetingCleanupSettings = {
	mySetting: 'default'
}

export default class MeetingCleanup extends Plugin {
	
	settings: MeetingCleanupSettings;
	people: Map<string, Person>;

	async onload() {
		await this.loadSettings();
		this.people = new Map();
 
		const ribbonIconEl = this.addRibbonIcon('mail-check', 'MeetingCleanup Plugin', async (evt: MouseEvent) => {
			await this.loadPeople();
			await this.cleanupMeetings();
			new Notice('Meeting cleanup complete!');
		});

		this.registerEvent(
			this.app.vault.on('create', async (file) => {
				console.log("File created: " + file.path);
				if (file instanceof TFile && file.path.startsWith('people')) {
					await this.loadPeople();
					await this.cleanupMeetings();
					console.log("New Person Created");
				} else if (file instanceof TFile && file.path.startsWith('meetings')) {
					await this.loadPeople();
					await this.cleanupMeetings();
					console.log("New Meeting(s) Created");
				}
				
			})
		);

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
        const meetingsDir = 'meetings';
        const files = this.app.vault.getMarkdownFiles()
		const meetingFiles = files.filter(file => file.path.startsWith(meetingsDir));

        for (const file of meetingFiles) {
            let fileContent = await this.app.vault.read(file);

            // Replace all email addresses with person links
            fileContent = fileContent.replace(/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g, (email) => {
                const person = this.people.get(email);
                return person ? person.createLink() : email;
            });
           await this.app.vault.modify(file, fileContent);
        }
    }

	
}
