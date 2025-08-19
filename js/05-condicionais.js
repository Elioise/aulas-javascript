'use strict';

console.log("Teste!");

/*Comandos Condicionais mais comuns
if     ->  SE
else   -> SENÃO
*/

console.log("Exemplo 1");
let numero = 50;
// Condicional Simples (usa apenas If)
if (numero >= 10) {
    console.log("Se vc está vendo essa mensagem é porque a condiçao é VERDADEIRA!");

}

console.log("\nExemplo 2");
let aluno = "OZZY";
let idade = 50;

/*Logíca : verificar se o aluno é maior ou menor idade */

// Condicional Composta (if/else)

if (idade < 18) {
    console.log("Voce é menor de idade!");
} else {
    console.log("voce é maior de idade!");

}


/* Exercício Condicional
 
1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado".*/



let nota1 = 8;
let nota2 = 2;
let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("aprovado");

}
else {
    console.log("reprovado");
}


/*exercicio lolo
let notas1 = 4;
let notas2 = 6;
let medias = (notas1+notas2)/ 2;

if(medias >= 7){
    console.log("APPROUVÉ");
    
}
else{
    console.log("Echec");
    
}
*/


