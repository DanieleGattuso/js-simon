
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA:
// non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.

// Dichiariamo gli elementi di input
let display = document.querySelectorAll("input");
const confirmButton = document.getElementById('confirm-button')
const timerNumber = document.getElementById('numbers-list')

console.log(display, confirmButton, timerNumber);


let timer;

// Gestiamo l'evento dell'inizio cronometro

document.addEventListener('DOMContentLoaded', function(){

    let count = 30

    // Lo avviamo

    timer = setInterval (() =>{
        
        count = count - 1
        timerNumber.textContent = count;
    },  1000)

    // Lo stoppiamo dopo 30 secondi
    setTimeout(() => {
        clearInterval(timer);
        
    }, 31000);
})

  
