//DATI

let saleApplied = 0;

// Richiesta all'utente di quanti km vuole percorrere
const userKm = parseInt(prompt ('Quanti km vuoi percorrere?'));
console.log(typeof (userKm));

// Richiesta dell'età all'utente 
const userAge = parseInt(prompt ('Quanti anni hai?'));
console.log(typeof (userAge));

//Calcolo prezzo biglietto 
const priceTicket = 0.21 * userKm;
console.log(priceTicket);

//Calcolo sconto in base all'età 
if (userAge < 18) {
     saleApplied = (priceTicket*20) / 100;
    console.log (typeof (saleApplied));
}else if (userAge > 65) {
    saleApplied = (priceTicket*40) / 100;
    console.log (typeof (saleApplied));
}

//Prezzo con lo sconto 
const priceSale = priceTicket - saleApplied;
console.log (typeof (priceSale));
    
//Stampa su html
const printPrice = priceSale.toFixed(2);
document. getElementById('ticket').innerHTML ="Il prezzo del biglietto è: € " + printPrice;


