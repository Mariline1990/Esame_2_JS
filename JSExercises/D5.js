/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

let ordinato = pets.sort() // ESERCIZIO 2

for( var i = 0; i < pets.length; i++ ){
  console.log(ordinato[i])
}



/* ESERCIZIO 2
Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/* ESERCIZIO 3
Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("----------------*0*-----------------")


let invertito = pets.reverse();

for( let i = 0; i < pets.length; i++ ){
  console.log(invertito[i])
}

/* ESERCIZIO 4
Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("----------------*0*-----------------")


/*

hamster
dog
cat
redfish  
*/


let first = pets.shift()
let scambio = pets.push(first);

for( let i = 0; i < pets.length; i++ ){
  console.log(pets[i])
}




/* ESERCIZIO 5
Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for(let i = 0 ; i < cars.length; i++){
  cars[i].licensePlate = 'fk131vw'
}

console.log(cars)



/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let nuovaMacchina = {
  brand: 'Skoda',
  model: '20x8',
  color: 'GIALLO',
  trims: ['Montecarlo', 'GT'],
}

cars.push(nuovaMacchina)
console.log(cars)

for(let i = 0 ; i < cars.length; i++){
  cars[i].trims.pop()
}
console.log(cars)



/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let i = 0 ; i < cars.length; i++){
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)




/* ESERCIZIO 8
Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for(let i = 0 ; i < cars.length; i++){
  let letter = cars[i].color.charAt(0)
  if (letter === "b"){
    console.log("Fizz")
  }else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105
]

let j = 0 

while(numericArray[j] !== 32 ) {
  console.log(numericArray[j])
  j++ 
}


/* ESERCIZIO 10
Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
dell'alfabeto italiano.
es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let lettersPositions =[]

let f = 0

while( f < charactersArray.length) {
  switch (charactersArray[f]){
    case 'a':
    lettersPositions.push(1);
    break;
    case 'b':
    lettersPositions.push(2);
    break;  
    case 'c':
    lettersPositions.push(3);
    break;
    case 'd':
    lettersPositions.push(4);
    break;
    case 'e':
    lettersPositions.push(5);
    break;
    case 'f':
    lettersPositions.push(6);
    break;
    case 'g':
    lettersPositions.push(7);
    break;
    case 'h':
    lettersPositions.push(8);
    break;  
    case 'i':
    lettersPositions.push(9);
    break;
    case 'l':
    lettersPositions.push(10);
    break;
    case 'm':
    lettersPositions.push(11);
    break;
    case 'n':
    lettersPositions.push(12);
    break;
    case 'o':
    lettersPositions.push(13);
    break;
    case 'p':
    lettersPositions.push(14);
    break;  
    case 'q':
    lettersPositions.push(15);
    break;
    case 'r':
    lettersPositions.push(16);
    break;
    case 's':
    lettersPositions.push(17);
    break;
    case 't':
    lettersPositions.push(18);
    break;
    case 'u':
    lettersPositions.push(19);
    break;
    case 'v':
    lettersPositions.push(20);
    break;
    case 'z':
    lettersPositions.push(21);
    break;
  }
  
  
  f++
}
console.log(lettersPositions);

