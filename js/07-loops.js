'use strict';

/* Loops ou estruturas de repetição
São comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.

Comandos mais tradicionais: while (ENQUANTO) e for (PARA)

Normalmente, os loops são controlados através de uma variável contadora. Esta variável é comumente chamada de "i", "j", "k" ou qualquer outra letra se necessário. */

console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;
while (i <= 5) {
    console.log("Valor do i: " + i);
    i++;
}

console.log("\nExemplo 2: FOR (para)");

/* for( inicialização da variável; condição; atualização ) */
for (let j = 1; j <= 10; j++) {
    console.log("J vale " + j);
}

console.log("\nExemplo 3: loop regressivo");
for (let k = 10; k >= 1; k--) {
    console.log("K vale " + k);
}


console.log("\nExemplo 4: loop e array");

const bandas = [
    "Slayr", "Metallica", "Iron Maiden", "Nightwish", "Judas Priest"
];

for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i]);

}

console.log("\n------\n");

// Usando loop for/of (exclusivo do JS)
for (const banda of bandas) {
    console.log(banda);


}

console.log("\nExemplos 5: loop e objeto");
const pessoa = {
    nome: "Fulano da Silva",
    idade: 40,
    cidade: "saõ paulo",
    estado: "SP"
};

//usando o loop for/in para objetos (exclusivo do JS)
for (const prop in pessoa) {
    console.log(pessoa[prop]);

}



/*1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3 */

let clientes = [
    {
        nome: "Dio",
        id: 1

    },
    {
        nome: "Ozzy",
        id: 2
    },
    {
        nome: "Ian",
        id: 3
    }
]

for (const loja of clientes) {
    console.log(`- clientes: ${loja.nome}, id: ${loja.id}`);

}

for(const cliente of clientes){
console.log(`- Cliente: ${cliente.nome}, id: ${cliente.id}`);

}

for( let i = 0; i< clientes.length; i++ ){
    console.log(`- cliente: ${clientes[i].nome}, id: ${clientes [i].id}`);
    
}

