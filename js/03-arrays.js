"use strict";
// para saber se tudo ta certo, a conexão console.log('teste');


// Declarando um array (vetor)
let vocalistas = ["Ozy", "Dio", "Lemmy", "David Gilmour"];
console.log(vocalistas);
// console.log(vocalista); para visualizar a estrutura do array inteiro


console.log(vocalistas[0]);
//accesando um determinando elemento através do índice

// O david Gilmour está em turnê tocando Pink Floyd

console.log(`O ${vocalistas[3]} esta em turnê tocando Pink Floyd`);


// Relembrando como criar/usararrays (vetor)

let seila = 6;
const coisas = [10, "Senac",  "<h2>oie</h2>" , seila, 15.88];
console.log(coisas [1]);
console.log(coisas[4]);



/*Exercicios (FAÇA AQUI MESMO)*/ 
// 1) Crie um array contendo o nome de 7 coisas que vc gosta
//(exemplos: artista, músicas, livros, comida.... sei lá, inventa!)

// Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto,  e o sétimo elemento do array. Use concatenação e/ou template string.



let comida = ["fejoada", "chocolate", "pão com ovo", "cachorro quente", "legumes",  "molho de x", "macarrão"];

console.log(` Eu gostei muito de ${comida[1]}`);
console.log("A comida prefida do meu marido é arroz com "+comida[4]+" ");
console.log(`O meu filho sempre pedir ${comida[6]} em casa`);


let coisasquegosto = ["Rush", "pink Floyd", "adele", "deep", "slayer", "dem da garoa", "metallica"];

console.log(coisasquegosto[1]);
console.log(coisasquegosto[4]);
console.log(coisasquegosto[6]);


console.log(`Gosto muito dos artistas: ${coisasquegosto[1]}, ${coisasquegosto[4]}, ${coisasquegosto[6]}`);









