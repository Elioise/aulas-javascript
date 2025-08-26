'use strict';

/*Sobre Funções
Funções são blocos de código responsaveis por executar determinadas tarefas.
para usar estes blocos/funçôes, é necessario "chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funções:
-Reutilização de código
-organisação de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades.
-Performance melhor
-maior facilidade para manutenções

No javascript, existem varias maneiras de se criar uma função anônima, função nomeada/declarada e arrow function.*/


console.log("exemplo1: função anônima");

const exemplo1 = function () {
    //corpo da função : ação que a função vai fazer
    console.log("ola Função Anonima!");

};

//chamando/invocando a função
exemplo1();

console.log("\exemplo 2: Função Nomeada/declarada ");
function exemplo2() {
    console.log("esta é uma função nomeada!");

}
exemplo2();

console.log("\exemplo 3: Arrow Function (Função flecha/seta");

/*Sintaxe potencialmente mais simples para funções no javascript*/ 

const exemplo3 =() => {
    console.log("Sintaxe Arrow Function!");
    
};

exemplo3();

//obs: funções(em qualquer sintaxe) também podem trabalhar com parametros/argumentos.

//Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parenteses.

//Geralmente, ao terminar o processamento dos dados. a funçõe "retorna" para fora um resultado.







