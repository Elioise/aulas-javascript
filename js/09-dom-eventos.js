'use stict'

/*Exemplo 01 */
//procurando (querySeletor) por um elemento chamado exemplo1
const exemplo1 = document.querySelector
   ("#exemplo1");
const mensagem01 = document.
   querySelector

   ("#mensagem01");
const pagina = document.querySelector("body");

/*getElementById  só para id*/



/*
Para selecionar vários elementos, use querySelectorAll. O resultado é uma esp´[ecie de array de elementos (NodeList).
*/
const paragrafos = document.querySelectorAll("p")
console.log(paragrafos);




/*Sobre eventos
um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

O JavaScript suporta centenas de tipos de evento. Exemplos: clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da página e etc.*/

//Exemplo detectando eventos

exemplo1.addEventListener("click", function () {
   mensagem01.textContent = "opa, evento funcionou!"
   mensagem01.classList.add("destaque");

});


mensagem01.addEventListener("dblclick", function () {
   mensagem01.textContent = "";
   //remove a classe destaque
   mensagem01.classList.remove("destaque");
});



const titulo = document.querySelector("h1")


/*Geral
 Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página


2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.
3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão).*/

const doEvento = document.querySelector("h1")

doEvento.addEventListener("mouseover", function () {
   doEvento.textContent = "Praticando Eventos!";
   doEvento.classList.add("pratico");

});

const evento2 = document.querySelector("#ref");

evento2.addEventListener("click", function () {
   doEvento.textContent = "Eventos"; doEvento.classList.remove("pratico");
})

//const evento2 = document.querySelector("h2:last-of-type");

/*exemplo 3: modo noturno*/

const botaomodonoturno = document.querySelector("#noturno");

botaomodonoturno.addEventListener("click", function () {
   /*Usamos o toggle para alternae entre adicionar a classe ou remover a classe, de acordo com cada clique*/

   pagina.classList.toggle("modo-noturno");

   //1
   pagina.style.transition = "2s";
   //2
   if (pagina.classList.contains("modo-noturno")) {
      botaomodonoturno.textContent = "desativar";
   } else {
      botaomodonoturno.textContent = "ativar";
   }
});


/* DESAFIOS!
    1) Faça a mudança de cores acontecer gradualmente (use o transition!)

    
    2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno
    estiver aplicada à página, faça o texto do botão mudar para "Desativar".
    Caso contrário, faça o texto do botão exibir "Ativar". */


    /*Exemplo 02*/ 

    const janelaModal = document.querySelector("#janelinha");

    function gerenciarJanela(event){
if(event.clientY < 0){
  janelaModal.showModal();
   
}
document.removeEventListener("mouseout", gerenciarJanela)
    }
    document.addEventListener("mouseout" , gerenciarJanela);

    const botaoFechar = janelaModal.querySelector("button");

    botaoFechar.addEventListener("click", function(){
      janelaModal.close();
    });