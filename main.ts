import {  App, Editor, MarkdownView, Modal, Notice, Plugin, TFile, TFolder, parseFrontMatter } from 'obsidian';
import MeetingCleanupSettingTab from './meetingCleanupSettings';
interface MeetingCleanupSettings {
	mySetting: string;
}
const DEFAULT_SETTINGS: MeetingCleanupSettings = {
	mySetting: 'default'
}

export default class MeetingCleanup extends Plugin {
	constructor() {
        super(); 
    }
	settings: MeetingCleanupSettings;

	async onload() {
		//await this.loadSettings();
		
		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('mail-check', 'MeetingCleanup Plugin', async (evt: MouseEvent) => {
			new Notice('Meeting cleanup complete!');
		});
		console.log("MeetingCleanup loaded");

		
		//const peopleDir = '/people';
		//console.log(this.app.vault.getMarkdownFiles());
        //const files = this.vault.getMarkdownFiles().filter(file => file.path.startsWith(peopleDir));
		

	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	
}
