import { Console } from 'console';
import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile, TFolder } from 'obsidian';
import MeetingCleanup from './main';

export default class MeetingCleanupSettingTab extends PluginSettingTab {
	plugin: MeetingCleanup;


	constructor(app: App, plugin: MeetingCleanup) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
		new Setting(containerEl)
			.setName('People Directory')
			.setDesc('Select the directory that contains people')
			.addDropdown(dropdown => {
				dropdown.addOption('', 'Select a directory');
				const directories = new Set(this.app.vault.getFiles().map(file => file.parent.path));
				directories.forEach(dir => {
					dropdown.addOption(dir, dir);
				});
				dropdown.setValue(this.plugin.settings.peopleDir);
				dropdown.onChange(async (value) => {
					this.plugin.settings.peopleDir = value;
					await this.plugin.saveSettings();
				});
			});

		new Setting(containerEl)
			.setName('Meetings Directory')
			.setDesc('Select the directory that contains meetings')
			.addDropdown(dropdown => {
				dropdown.addOption('', 'Select a directory');

				const directories = new Set(this.app.vault.getFiles().map(file => file.parent.path));
				directories.forEach(dir => {
					dropdown.addOption(dir, dir);
				});
				dropdown.setValue(this.plugin.settings.meetingsDir);
				dropdown.onChange(async (value) => {
					this.plugin.settings.meetingsDir = value;
					await this.plugin.saveSettings();
				});

			});

		new Setting(containerEl)
			.setName('Email Domain and Company Pairs')
			.setDesc('Enter email domain and company name pairs, one per line, in the format "domain: company"')
			.addTextArea(textArea => {
				textArea.setValue(this.plugin.settings.domainCompanyPairs.join('\n'));
				textArea.onChange(async (value) => {
					this.plugin.settings.domainCompanyPairs = value.split('\n').map(line => line.trim());
					await this.plugin.saveSettings();
				});
			});

	}
}
