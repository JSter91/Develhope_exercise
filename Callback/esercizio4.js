/* Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array. */

function runCallbacks(callbacks) {
  callbacks.forEach((element) => element());
}

function firstCallback() {
  return console.log("first callback");
}
function secondCallback() {
  return console.log("second callback");
}

function thirdCallback() {
  return console.log("third callback");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
