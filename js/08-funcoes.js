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

const exemplo3 = () => {
    console.log("Sintaxe Arrow Function!");

};

exemplo3();

//obs: funções(em qualquer sintaxe) também podem trabalhar com parametros/argumentos.

//Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parenteses.

//Geralmente, ao terminar o processamento dos dados. a funçõe "retorna" para fora um resultado.


function saudacao(nome = "visitante") {
    console.log("ola!," + nome);

}

saudacao("Elioise");
saudacao("Lu");
saudacao("Angel");
saudacao();// nesse caso, é usado "visitante" como valor.

console.log("\nExemplo 5: função com parametros e retorno");

//Sempre que tivermos a necessidade de trabalhar com o resultado do processamento de uma função, então essa função deve ter o return.

function multiplicar(valor1, valor2) {
    return valor1 * valor2
}

//chamando a função e recebemos o retorno/resultado dela
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

// exibimos o resultado
console.log("resultado 1 : " + resultado1);
console.log("resultado 1 :" + resultado2);


console.log("\nExemplo 6: Simplificando com Arrow Function");

//versão1: Sintaxe declarada/nomeada
/*function somar (valor1 , valor2) {
    return valor1 + valor2;
}*/

//versão 2 : sintaxe Arrow Function

const somar = (valor1, valor2) => valor1 + valor2;

console.log(somar(150, 500));


console.log("\nExemplo 7: formatando valor monetário");
let preco = 5000;
let desconto = preco * 0.10; //10%
let precoFinal = preco - desconto;


function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-br",
        {
            style: "currency",
            currency: "BRL"
        }).format(valor);
}

console.log("preço original:" + formatarMoeda(preco));
console.log("desconto:" + formatarMoeda(desconto));
console.log("preço final:" + formatarMoeda(precoFinal));

//exemplo: usando recursos da classe Intl (Internacionalização)
const exemplo = new Intl.NumberFormat("pt-br",
    {
        style: "currency",
        currency: "BRL"
    }).format(preco);

console.log(exemplo);





