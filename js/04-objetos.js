'use stict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("exemplo 1\n");

const pessoa = {
    nome: "chaves", 
    idade: 8,
    cidade: "são paulo",
    estado: "SP"
}; 

console.log(pessoa);

//Acessamos as propriedades usando nomeDoObjeto.nomeDaPropriedade

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);

//exemplo 2 : objeto com array
console.log("\nExemplo2\n");

const livro = {
    titulo: "O Senhos dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: [
        "A sociedade do Anel",
        "O retorno do Rei",

    ]
};

console.log(livro);

console.log(livro.titulo);

/* Para accesar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice pois se trata de um array */

console.log(`Meu livro preferido é ${livro.volumes[1]}`);

// meu exemplo
const cor = {
    maca: "vermelho",
    limao: "verde",
    farinha: "branco"
};

console.log(cor.limão);
console.log(`Precisa do limão ${cor.limao} para fazer suco de limão`);

console.log("A cor de maçã é "+cor.maca+"" );




//Exemplo 3 : array de objetos
console.log("\nExemplo3\n");
const livros = [
    {
      titulo:  "O assasinato no Expresso Oriente",
      autor: "Agatha christie"
    
    },

    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },

    {
        titulo: "um livro qualquel",
        autor: "Fulano de tal"
    }


];

console.log(livros);
console.log(livros[2].titulo);






















