/* -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
 -Utilizzare setTimeout per simulare un'operazione asincrona. */

function semplice() {
  return new Promise((resolve, reject) => {
    let data = true;
    setTimeout(() => {
      if (data) {
        resolve(`operazione portatata a termine :${data}`);
      } else {
        reject("operazione non portata a termine");
      }
    }, 2000);
  });
}

semplice()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
