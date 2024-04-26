import { parseYaml } from 'obsidian';

export class Person {
	name: string; 
    company: string;
    location: string;
    title: string;
	email: string;
	createLink: boolean;
    client: string[];
    aliases: string;
    languages: string;
    publish: boolean;
    date_last_spoken: string;
    follow_up: string;
    linkedin: string;

    constructor(name: string, frontMatterString: string) {
        const data = parseYaml(frontMatterString) as any;
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

    createPersonLink(): string {
       return `[[${this.name}]]`;
    }
}
