import { parseYaml } from 'obsidian';
export class Person {
    constructor(name, frontMatterString) {
        const data = parseYaml(frontMatterString);
        this.name = name;
        this.company = data.company;
        this.location = data.location;
        this.title = data.title;
        this.email = data.email;
        this.createLink = data.createLink;
        this.client = data.client;
        this.aliases = data.aliases;
        this.languages = data.languages;
        this.publish = data.publish;
        this.date_last_spoken = data.date_last_spoken;
        this.follow_up = data.follow_up;
        this.linkedin = data.linkedin;
    }
    createPersonLink() {
        return `[[${this.name}]]`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFckMsTUFBTSxPQUFPLE1BQU07SUFlZixZQUFZLElBQVksRUFBRSxpQkFBeUI7UUFDL0MsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFRLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELGdCQUFnQjtRQUNiLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDN0IsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VZYW1sIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcblx0bmFtZTogc3RyaW5nOyBcbiAgICBjb21wYW55OiBzdHJpbmc7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuXHRlbWFpbDogc3RyaW5nO1xuXHRjcmVhdGVMaW5rOiBib29sZWFuO1xuICAgIGNsaWVudDogc3RyaW5nW107XG4gICAgYWxpYXNlczogc3RyaW5nO1xuICAgIGxhbmd1YWdlczogc3RyaW5nO1xuICAgIHB1Ymxpc2g6IGJvb2xlYW47XG4gICAgZGF0ZV9sYXN0X3Nwb2tlbjogc3RyaW5nO1xuICAgIGZvbGxvd191cDogc3RyaW5nO1xuICAgIGxpbmtlZGluOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGZyb250TWF0dGVyU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHBhcnNlWWFtbChmcm9udE1hdHRlclN0cmluZykgYXMgYW55O1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcGFueSA9IGRhdGEuY29tcGFueTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuXHRcdHRoaXMuZW1haWwgPSBkYXRhLmVtYWlsO1xuXHRcdHRoaXMuY3JlYXRlTGluayA9IGRhdGEuY3JlYXRlTGluaztcbiAgICAgICAgdGhpcy5jbGllbnQgPSBkYXRhLmNsaWVudDtcbiAgICAgICAgdGhpcy5hbGlhc2VzID0gZGF0YS5hbGlhc2VzO1xuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGRhdGEubGFuZ3VhZ2VzO1xuICAgICAgICB0aGlzLnB1Ymxpc2ggPSBkYXRhLnB1Ymxpc2g7XG4gICAgICAgIHRoaXMuZGF0ZV9sYXN0X3Nwb2tlbiA9IGRhdGEuZGF0ZV9sYXN0X3Nwb2tlbjtcbiAgICAgICAgdGhpcy5mb2xsb3dfdXAgPSBkYXRhLmZvbGxvd191cDtcbiAgICAgICAgdGhpcy5saW5rZWRpbiA9IGRhdGEubGlua2VkaW47XG4gICAgfVxuXG4gICAgY3JlYXRlUGVyc29uTGluaygpOiBzdHJpbmcge1xuICAgICAgIHJldHVybiBgW1ske3RoaXMubmFtZX1dXWA7XG4gICAgfVxufVxuIl19