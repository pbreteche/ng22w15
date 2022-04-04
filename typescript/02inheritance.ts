'use strict';

interface Namable {
    name: string;
    getLowerName(): string;
}

class Contact implements Namable {
    /**
     * Paramètre name est optionnel (valeur par défaut)
     * Typage implicite à string (valeur par défaut)
     */
    constructor(public name = '') {}
    getLowerName(): string {
        return this.name.toLowerCase();
    } 
}

class Customer extends Contact {
    public level  = 'bronze'; // init sur l'attribut en TS, dans le constructeur en JS
    
    /**
     * mot clé override pour la redéfinition
     * doit conserver la cohérence des types:
     *  - plus spécifique pour le type de retour
     *  - plus générique pour les types de params
     */
    //override getLowerName(): number {
    //    return this.name.length;
    //}
}

// Possibilité d'utiliser classes et interfaces pour typer
function checkName(namableObject: Namable): void {
    console.log(namableObject.name);    
}

// Un objet est compatible avec le type s'il est conforme
// même s'il est non-typé ou pas du même type
checkName({
    name: 'test',
    getLowerName: function() {return 'test'},
})

// Possibilité de typer si on souhaite un type différent
// de celui inféré par l'affectation
const myContact: Contact = new Customer();
