const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});


(function() { // IIFE : Immediatly invocated function expression
    // association de la fonction "resolve"
    myPromise.then(value => console.log(value))
        .catch(err => console.error(`Erreur : ${err}`))
})();


(async function() { // la fonction async peut être interrompue
    // await permet à la foction de rendre la main, le temps que la promesse soit résolue
    try {
        const value = await myPromise;
        console.log(value)
    } catch (err) {
        console.error(`Erreur : ${err}`)
    }
})();
