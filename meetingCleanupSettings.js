import { __awaiter } from "tslib";
import { PluginSettingTab, Setting } from 'obsidian';
export default class MeetingCleanupSettingTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
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
            dropdown.onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.peopleDir = value;
                yield this.plugin.saveSettings();
            }));
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
            dropdown.onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.meetingsDir = value;
                yield this.plugin.saveSettings();
            }));
        });
        new Setting(containerEl)
            .setName('Email Domain and Company Pairs')
            .setDesc('Enter email domain and company name pairs, one per line, in the format "domain: company"')
            .addTextArea(textArea => {
            textArea.setValue(this.plugin.settings.domainCompanyPairs.join('\n'));
            textArea.onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.domainCompanyPairs = value.split('\n').map(line => line.trim());
                yield this.plugin.saveSettings();
            }));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ0NsZWFudXBTZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lZXRpbmdDbGVhbnVwU2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBb0QsZ0JBQWdCLEVBQUUsT0FBTyxFQUFrQixNQUFNLFVBQVUsQ0FBQztBQUd2SCxNQUFNLENBQUMsT0FBTyxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjtJQUlyRSxZQUFZLEdBQVEsRUFBRSxNQUFzQjtRQUMzQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPO1FBQ04sTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUU3QixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQixPQUFPLENBQUMsMkNBQTJDLENBQUM7YUFDcEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUM7YUFDdEIsT0FBTyxDQUFDLG9CQUFvQixDQUFDO2FBQzdCLE9BQU8sQ0FBQyw2Q0FBNkMsQ0FBQzthQUN0RCxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUU3QyxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckYsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUN0QixPQUFPLENBQUMsZ0NBQWdDLENBQUM7YUFDekMsT0FBTyxDQUFDLDBGQUEwRixDQUFDO2FBQ25HLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckYsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdjb25zb2xlJztcclxuaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBURmlsZSwgVEZvbGRlciB9IGZyb20gJ29ic2lkaWFuJztcclxuaW1wb3J0IE1lZXRpbmdDbGVhbnVwIGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWV0aW5nQ2xlYW51cFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuXHRwbHVnaW46IE1lZXRpbmdDbGVhbnVwO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTWVldGluZ0NsZWFudXApIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnUGVvcGxlIERpcmVjdG9yeScpXHJcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIGRpcmVjdG9yeSB0aGF0IGNvbnRhaW5zIHBlb3BsZScpXHJcblx0XHRcdC5hZGREcm9wZG93bihkcm9wZG93biA9PiB7XHJcblx0XHRcdFx0ZHJvcGRvd24uYWRkT3B0aW9uKCcnLCAnU2VsZWN0IGEgZGlyZWN0b3J5Jyk7XHJcblx0XHRcdFx0Y29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgU2V0KHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCkubWFwKGZpbGUgPT4gZmlsZS5wYXJlbnQucGF0aCkpO1xyXG5cdFx0XHRcdGRpcmVjdG9yaWVzLmZvckVhY2goZGlyID0+IHtcclxuXHRcdFx0XHRcdGRyb3Bkb3duLmFkZE9wdGlvbihkaXIsIGRpcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0ZHJvcGRvd24uc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGVvcGxlRGlyKTtcclxuXHRcdFx0XHRkcm9wZG93bi5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnBlb3BsZURpciA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnTWVldGluZ3MgRGlyZWN0b3J5JylcclxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgZGlyZWN0b3J5IHRoYXQgY29udGFpbnMgbWVldGluZ3MnKVxyXG5cdFx0XHQuYWRkRHJvcGRvd24oZHJvcGRvd24gPT4ge1xyXG5cdFx0XHRcdGRyb3Bkb3duLmFkZE9wdGlvbignJywgJ1NlbGVjdCBhIGRpcmVjdG9yeScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBkaXJlY3RvcmllcyA9IG5ldyBTZXQodGhpcy5hcHAudmF1bHQuZ2V0RmlsZXMoKS5tYXAoZmlsZSA9PiBmaWxlLnBhcmVudC5wYXRoKSk7XHJcblx0XHRcdFx0ZGlyZWN0b3JpZXMuZm9yRWFjaChkaXIgPT4ge1xyXG5cdFx0XHRcdFx0ZHJvcGRvd24uYWRkT3B0aW9uKGRpciwgZGlyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZWV0aW5nc0Rpcik7XHJcblx0XHRcdFx0ZHJvcGRvd24ub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZWV0aW5nc0RpciA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSk7XG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdFbWFpbCBEb21haW4gYW5kIENvbXBhbnkgUGFpcnMnKVxyXG5cdFx0XHQuc2V0RGVzYygnRW50ZXIgZW1haWwgZG9tYWluIGFuZCBjb21wYW55IG5hbWUgcGFpcnMsIG9uZSBwZXIgbGluZSwgaW4gdGhlIGZvcm1hdCBcImRvbWFpbjogY29tcGFueVwiJylcclxuXHRcdFx0LmFkZFRleHRBcmVhKHRleHRBcmVhID0+IHtcclxuXHRcdFx0XHR0ZXh0QXJlYS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kb21haW5Db21wYW55UGFpcnMuam9pbignXFxuJykpO1xyXG5cdFx0XHRcdHRleHRBcmVhLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZG9tYWluQ29tcGFueVBhaXJzID0gdmFsdWUuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IGxpbmUudHJpbSgpKTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==