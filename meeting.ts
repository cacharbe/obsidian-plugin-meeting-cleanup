import { Person } from './Person';

export class Meeting {
    organizer: string;
    attendees: string[];

    constructor(data: any) {
        // Initialize properties from data
    }

     replaceOrganizer(people: Map<string, Person>) {
        const organizerPerson = people.get(this.organizer);
        if (organizerPerson) {
            this.organizer = organizerPerson.createLink();
        }
    }

    replaceAttendees(people: Map<string, Person>) {
        this.attendees = this.attendees.map(attendee => {
            const attendeePerson = people.get(attendee);
            return attendeePerson ? attendeePerson.createLink() : attendee;
        });
    }

	createLink(): string {
        return `[[${this.fileName}]]`;
    }
}
