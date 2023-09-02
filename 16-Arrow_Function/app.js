// ARROW FUNCTIONS

/*
Existe uma forma ainda mais simples e curta em relação a sintaxe para criar funções. São as funções geradas com Arrow Function.
*/



let Funcao = (argumentos) => expressao;

// Esta expressao cria uma função que aceita argumentos, depois avalia a expressao do lado deireito e retorna o resultado. 

let funcao = function(a,b,c) {
    return a + b + c;
};



// Outro exemplo:
let Adicao = (a,b) => a + b;

// É uma abreviação de:
let adicao = function (a,b,c) {
    return a + b + c;
}



let saudar = (nome) => {
    let saudacao = "bom dia"
    return `${saudacao}, ${nome}`
}
console.log(saudar('joao'));