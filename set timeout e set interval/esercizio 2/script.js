// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.

let tempoRimanente = 10;

function contoAllaRovescia(tempoRimanente) {
  console.log("Conto alla rovescia in corso...");
  const counter = setInterval(() => {
    tempoRimanente--;
    if (tempoRimanente > 0) {
      console.log(`Tempo rimanente: ${tempoRimanente} secondi`);
    } else {
      console.log("Conto alla rovescia terminato!");
      clearInterval(counter);
    }
  }, 1000);
}

contoAllaRovescia(tempoRimanente);
