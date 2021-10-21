/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


const ticketCost = document.getElementById("ticket-cost")
ticketCost.innerHTML = "ticket cost is:";

// I ask the user the km he has to travel   (chiedo all'utente i km che deve percorrere)
const km = parseInt(prompt("How many km do you have to travel?"));
console.log("km", km);

// i ask the user how old he is  (chiedo all'utente quanti anni ha)
const age = parseInt(prompt("How old are you?"));
console.log("user age", age);

// i calculate how much the routes costs whitout discounts    (calcolo quanto costa la tratta senza sconti)
let baseCost = km * 0.21;
console.log("base cost", baseCost);

// if the user is under 18 years i apply a 20% discount   (se l'utente ha meno di 18 anni applico uno sconto del 20%)
let costUnder18;
if (age < 18) {
    costUnder18 = (baseCost * 20) / 100;
    ticketCost 
} 

console.log("20% discount", costUnder18);

// if the user is over 65 years i apply a 40% discount   (se l'utente ha più di 65 anni applico uno sconto del 40%)
let costOver65;
if (age > 65) {
    costOver65 = baseCost * 0.40;
}

console.log("40% discount", costOver65);

// i tell the user the cost of the ticket   (dico all'utente il costo del biglietto)