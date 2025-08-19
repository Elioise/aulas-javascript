'use stict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("exemplo 1\n");

//////////
const pessoas ={
        nome: "Angel",
        idade: 5,
        cidade: "sp paulo"
};

console.log("meu nome é "+pessoas.nome+"; eu tenho "+pessoas.idade+"anos"); 

console.log(`Meu nome é ${pessoas.nome}; eu tenho ${pessoas.idade}anos`);

console.log(pessoas.nome);
console.log(pessoas.idade);




//Acessamos as propriedades usando nomeDoObjeto.nomeDaPropriedade


const escola ={
    nome: "SENAC",
    rua: "rua x",
    numero: 64,
    curso: 
    [
        "full stack",
        "informatica",
        "marketing"
    ]

};


console.log(escola);

console.log("\n exemplo_da_casa\n");

//exemplo 2 : objeto com array

console.log(escola.nome, escola.rua, escola.curso[0], escola.curso[1], escola.nome, escola.curso[2]);

console.log(`O nome da minha escola é ${escola.nome}, esta na rua de ${escola.rua}, # ${escola.numero}, No senac tem varios cursos: tem ${escola.curso[0]}, ${escola.curso[2]} e ${escola.curso[1]}`);


//Exemplo 3 : array de objetos




