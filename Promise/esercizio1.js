// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6
// utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dati = { name: "John", age: 30 };
      if (typeof dati === "object") {
        resolve(dati);
      } else reject("error");
    }, 1000);
  });
}

fetchDataFromAPI()
  .then((data) => console.log("dati: ", data))
  .catch((error) => console.error(error));
