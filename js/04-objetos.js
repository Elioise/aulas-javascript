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



/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */



const aluno ={
    nomecompleto: "Elo",
    dataDeNascimento: "26 de novembro",
    lista_de_telefones: [
        "11 999 5452-06", //tel
        "11 999 8889-23" //cel
    ],

    endereco:{
        rua: "maboia",
        numero: "40",
        bairo: "maria"
    }

};

console.log(aluno.nomecompleto);
console.log(aluno.lista_de_telefones[0]);
console.log(aluno.endereco.bairo);
































