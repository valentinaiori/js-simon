/*

Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
e quali dei numeri da indovinare sono stati individuati.
*/ 

// visualizzare in pagina 5 numeri casuali.

const numbers = [];

for (let i = 0; i < 5; i++){
    const randomNumber = getRandomNumber(1,40);
    numbers.push(randomNumber)
}

const container = document.getElementById('container');
const numbersContainer = document.createElement('div')
container.appendChild(numbersContainer)

for ( let i = 0; i < numbers.length; i++){
    numbersContainer.innerHTML += `<h1>${numbers[i]}</h1>` 
}


// far partire un timer di 30 secondi
// dopo 30 secondi i numeri scompaiono 

const removeNumbers = () => {
    numbersContainer.remove()
}
setTimeout(removeNumbers, 30000)


const checkNumbers = () => {
    // rimuovo tutti i numeri cancellando il container che li contiene

    // l'utente deve inserire, uno alla volta, 
   //i numeri che ha visto precedentemente, tramite il prompt(). 
   const foundItems = [];
   
    for ( let i = 0; i < 5; i++){
        const userNumber = parseInt(prompt('Inserisci un numero'));

        // controllo se il numero inserito si trovi sulla pagina
        // controllo che il numero inserito non si trovi già nell'array foundItems
        if(numbers.includes(userNumber) && !foundItems.includes(userNumber)) { 
            foundItems.push(userNumber)
        }
    
    }

    container.innerHTML += `<h1> Quanti sono i numeri uguali: ${foundItems.length} </h1>`
    container.innerHTML += `<h1> Quali sono i numeri uguali: ${foundItems}</h1>` 
    
}

setTimeout(checkNumbers, 31000)





// Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
//e quali dei numeri da indovinare sono stati individuati.
    



function getRandomNumber(min, max){     // 1-40
    const range = max-min;
    const random = Math.floor(Math.random()* range);
    const result = random;
    return result;
}