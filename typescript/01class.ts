'use strict';

class Contact1 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    static getProperties(): string[] { // type identique à "Array<string>"
        return ['firstName', 'lastName'];
    }
}

const c1 = new Contact1('John', 'Doe');
// console.log(c1.firstName); erreur de compilation car propriété privée
Contact1.getProperties();
console.log(c1.getFullName, c1.getFullName(), c1.fullName);


class Contact2 {
    constructor(
        private firstName: string,
        private lastName: string
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
