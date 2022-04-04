'use strict';
class Contact1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static getProperties() {
        return ['firstName', 'lastName'];
    }
}
const c1 = new Contact1('John', 'Doe');
// console.log(c1.firstName); erreur de compilation car propriété privée
console.log(c1.getFullName, c1.getFullName(), c1.fullName);
class Contact2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
