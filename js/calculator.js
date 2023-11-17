/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.*/



// Chiedi all'utente il numero di chilometri e l'età del passeggero
var kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
var etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

// Calcola il prezzo del biglietto
var prezzoAlKm = 0.21;
var prezzoTotale = kmDaPercorrere * prezzoAlKm;

// Applica gli sconti in base all'età
if (etaPasseggero < 18) {
    // Sconto del 20% per i minorenni
    prezzoTotale -= prezzoTotale * 0.2;
} else if (etaPasseggero >= 65) {
    // Sconto del 40% per gli over 65
    prezzoTotale -= prezzoTotale * 0.4;
}

// Formatta il prezzo finale con massimo due decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Stampare il prezzo finale
console.log("Il prezzo totale del viaggio è: €" + prezzoTotale);