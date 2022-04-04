'use strict';
class Contact {
    /**
     * Paramètre name est optionnel (valeur par défaut)
     * Typage implicite à string (valeur par défaut)
     */
    constructor(name = '') {
        this.name = name;
    }
    getLowerName() {
        return this.name.toLowerCase();
    }
}
class Customer extends Contact {
    constructor() {
        super(...arguments);
        this.level = 'bronze'; // init sur l'attribut en TS, dans le constructeur en JS
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
}
function checkName(namableObject) {
    console.log(namableObject.name);
}
checkName({
    name: 'test',
    getLowerName: function () { return 'test'; },
});
