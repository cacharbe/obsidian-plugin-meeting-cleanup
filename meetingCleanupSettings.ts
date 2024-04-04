import { Console } from 'console';
import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile, TFolder } from 'obsidian';
import MeetingCleanup from './main';

export default class MeetingCleanupSettingTab extends PluginSettingTab {
	plugin: MeetingCleanup;


	constructor(app: App, plugin: MeetingCleanup) {
		super(app, plugin);
		this.plugin = plugin;
	}
	//test
	//test


	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
