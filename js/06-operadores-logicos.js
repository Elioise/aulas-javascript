'use script';
console.log("teste");

/*Operadores LÓGICOS 
&&   ->  E        -> AND

||   ->  OU       -> OR
!    ->  NÃO/NEGAÇAO  -> NOT */

// && -> Retorna TRUE se TODAS as condições forem VERDADEIRAS


console.log("Exemplo &&");
let idade = 20;
let temcarta = true;

if(idade >= 18 && temcarta  === true){
    console.log("pode dirigir");
    
} else {
    console.log("Não pode dirigir");
    
}


/*Sobre duplo e triplo sinal de igual

Ao usar == a comparacao é somente do valor, ou seja, não importa o tipo de dados (string, nunmber, etc)

- ao usar === a comparação é do valor e do tipo de dado, ou seja, importa tudo. */

let a = 10;
let b = '10';
//let resultadoComparacao = a ==b; // true
let resultadocomparacao = a ===b; //false

let resultadoComparacao = a == b;
console.log(resultadoComparacao);


console.log("\nExemplo ||");
// || -> retorna VERDADEIRO se pelo menos uma das condições for verdadeira

let feriado = false;
let fimDeSemana = true;

if(feriado === true ||  fimDeSemana === true)
    //if(feriado || fimDeSemana){
{
    console.log("nao tem aula!");
    
} else {
    console.log("tem aula!");
    
}


console.log("\nExemplo !");
// !  -> Inverte a lógica. o que é TRUE, vira FALSE. Oque é FALSE, vira TRUE.

//nao esta vigorando(false)

let blackfriday = false;

if(!blackfriday){
console.log("preços normais...");

} else {
    console.log("preços com descontos...");
    
}



