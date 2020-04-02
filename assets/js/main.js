// Palidroma:
// Chiedere all’utente di inserire una parola

var parolaUtente = prompt('Inserisci una parola qualsiasi');
var parolaReverse = invertiCaratteri(parolaUtente);
console.log(parolaUtente);
console.log(parolaReverse);
// Creare una funzione per capire se la parola inserita
// è palindroma
if(parolaUtente.charAt(0) == parolaReverse.charAt(0)) {
  console.log('Parola palidroma');
}else{
  console.log('Parola non palindroma');
}

// I° metodo
// function invertiCaratteri(word) {
//       var reverse= ' ';
//       for(var i = word.length -1; i >= 0; i--) {
//         reverse += word [i];
//       }
//       return reverse;
// }

// II° metodo
function invertiCaratteri(word) {
  var reverse = word.split('').reverse().join();
  return reverse;
}



// Pari e Dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// (usando una funzione)
// Dichiariamo chi ha vinto.
