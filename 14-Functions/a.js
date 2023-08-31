// //Função sem parâmetros
// function apresentarMensagem() {
//     console.log('Olá, mundo!')
// }
// apresentarMensagem();



// //Função com parâmetros
// function apresentarMensagem(texto) {
//     console.log(`A nova mensagem apresentada é: ${texto}`)
// }
// apresentarMensagem("Outra versão do Olá, Mundo!")



// //Função com vários parâmetros
// function adicionarValores(a, b) {
//     console.log(`${a} + ${b} = ${a+b}`);
// }
// adicionarValores(10,40);



// //Função com vários parâmetros que retorna um resultado
// function adicionarValores(a, b) {
//     return a + b;
// }

// let valor = adicionarValores(10,20);
// console.log('O resultado da adição é: ' +valor)



// //Variáveis locais e externas
// //Uma variável declarada dentro de uma função, só existe dentro desta função
// function executar() {
//     let nome = joao;
//     console.log(nome);
// }

// executar();
// console.log(nome); //Erro



// //Uma variável externa pode ser usada dentro e fora de uma função
// let nome = joao;

// function executar() {
//     console.log(nome);
//     nome = "ana";
// }

// executar();
// console.log(nome);



// //Funções com parâmetros com valor padrão
// function multiplicar(a, b = 2) {
//     return a * b;
// }

// console.log(multiplicar(3));
// console.log(multiplicar(3,5));



// Parâmetros por padrão indefinidos
// undefined, || ou nullish
function apresentarValor(valor) {
    // if(valor === undefined) valor = 100;
    valor = valor || 1000;
    // valor ?? 500;
    console.log(valor);
}

apresentarValor();