'use strict';

/**
 * Pas de remontée de déclaration pour les classes
 */
class Contact1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static getProperties() { // type identique à "Array<string>"
        return ['firstName', 'lastName'];
    }
}

/**
 * Remontée de la déclaration, la fonction est utilisable partout
 */
function Contact2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Contact2.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Contact2.getProperties = function() {
    return ['firstName', 'lastName'];
}

/**
 * Remontée de la déclaration, la variable est utilisable partout
 * mais undefined avant la première affectation
 */
var Contact3 = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

const c1 = new Contact1('John', 'Doe');
const c2 = new Contact2('John', 'Doe');
const c3 = new Contact3('John', 'Doe');

console.log(c1, c2, c3);
