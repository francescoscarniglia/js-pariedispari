// Palidroma:
// Chiedere all’utente di inserire una parola
var btnConfermaParola = document.getElementById('conferma-parola');
var btnConfermaNome = document.getElementById('conferma-nome');

btnConfermaNome.addEventListener('click',
function(){
  var nomeUser = document.getElementById("name-user").value;
  document.getElementById('saluto-utente').innerHTML = 'ciao'+ ' ' + nomeUser;
  console.log(nomeUser);
});

btnConfermaParola.addEventListener('click',
function(){
  var parolaUser = document.getElementById("parola-user").value;
  var parolaReverse = invertiCaratteri(parolaUser);
  if(parolaUser.charAt() == parolaReverse.charAt()) {
    document.getElementById('conferma-palidroma').innerHTML = '...la parola che hai inserito è una parola polindroma'
    console.log('una parola palidroma');
  }else{
    document.getElementById('conferma-palidroma').innerHTML = '...la parola che hai inserito non è una parola polindroma'
    console.log('Parola non palidroma');
  }
});
// var parolaUtente = prompt('Inserisci una parola qualsiasi');
// var parolaReverse = invertiCaratteri(parolaUtente);
// console.log(parolaUtente);
// console.log(parolaReverse);
// Creare una funzione per capire se la parola inserita
// è palindroma

// if(parolaUtente.charAt() == parolaReverse.charAt()) {
//   console.log('Parola palidroma');
// }else{
//   console.log('Parola non palidroma');
// }




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
var generaNumPc = numeroRandom(1,5);
console.log(generaNumPc);

function numeroRandom(min, max) {
   var numeroPc = Math.floor(Math.random()* (max - min + 1)) + min;
   return numeroPc;
}

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari
// (usando una funzione)
// Dichiariamo chi ha vinto.
