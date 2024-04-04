export class Person {
    company: string;
    location: string;
    title: string;
    email: string;
    client: string[];
    aliases: string;
    languages: string;
    publish: boolean;
    date_last_spoken: string;
    follow_up: string;
    linkedin: string;

    constructor(data: any) {
        // Initialize properties from data
    }

    createLink(): string {
        // Return a link to the person's note
    }
}
