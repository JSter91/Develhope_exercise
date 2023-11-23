/* Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo
 un punto esclamativo a ciascun nome di frutta.
 */

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

let newArr = [];
let result = fruits.forEach((fruit) => {
  newArr.push(fruit + "!");
});

let arrayFuits = newArr.join(" ");

console.log(arrayFuits);
