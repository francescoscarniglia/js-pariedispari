// palindroma:
// Chiedere all’utente di inserire una parola
var btnConfermaParola = document.getElementById('conferma-parola');


btnConfermaParola.addEventListener('click',
function(){
  var nomeUser = document.getElementById("name-user").value;
  document.getElementById('saluto-utente').innerHTML = 'ciao'+ ' ' + nomeUser;
  console.log(nomeUser);
  var parolaUser = document.getElementById("parola-user").value;
  var parolaReverse = invertiCaratteri(parolaUser);
  if(parolaUser.charAt() == parolaReverse.charAt()) {
    document.getElementById('conferma-palindroma').innerHTML = '...la parola che hai inserito è una parola polindroma'
    console.log('una parola palindroma');
  }else{
    document.getElementById('conferma-palindroma').innerHTML = '...la parola che hai inserito non è una parola polindroma'
    console.log('Parola non palindroma');
  }
});
// var parolaUtente = prompt('Inserisci una parola qualsiasi');
// var parolaReverse = invertiCaratteri(parolaUtente);
// console.log(parolaUtente);
// console.log(parolaReverse);
// Creare una funzione per capire se la parola inserita
// è palindroma

// if(parolaUtente.charAt() == parolaReverse.charAt()) {
//   console.log('Parola palindroma');
// }else{
//   console.log('Parola non palindroma');
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

var startPlay = document.getElementById('start-play');


// Generiamo un numero random (sempre da 1 a 5) per il computer
// (usando una funzione).
// var numeroUtente = document.getElementById('numero-Utente');

startPlay.addEventListener('click',
  function(){
    var okPlay = document.getElementById('number-type').value;
    document.getElementById('randomPc').innerHTML = generaNumPc;
    document.getElementById('numero-Utente').innerHTML = okPlay;
    // Sommiamo i due numeri
    var sumRes = sum(+okPlay, +generaNumPc);
    console.log(sumRes);

    // if(isPariPc == isPari(generaNumPc ){
    //   console.log('il numero del pc è pari');
    // }else{console.log('ciao');}
});

var generaNumPc = numeroRandom(1,5);
console.log(generaNumPc);
function numeroRandom(min, max) {
   var numeroPc = Math.floor(Math.random()* (max - min + 1)) + min;
   return numeroPc;
}

function isPari(a) {
  if(a % 2 === 0) {
    return true;
  }

  return false;
}

function sum(a, b) {
  return a + b;
}

// Stabiliamo se la somma dei due numeri è pari o dispari
// (usando una funzione)
// Dichiariamo chi ha vinto.
