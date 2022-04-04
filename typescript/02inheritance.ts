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
