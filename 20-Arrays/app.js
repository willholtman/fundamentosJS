// ARRAY

/*
string, number, boolean, etc, permitem guardar um unico valor
objetos permitem guardar uma estrutura de valores 
arrays sao coleçoes de valores organizados por uma determinada ordem
*/

// let nomes = new array();
// let nomes = [];

let nomes = ['joao', 'ana', 'carlos'];

// Para apresentar um valor do array usamos seu indice
console.log(nomes[0]);

// Podemos alterar um valor de um array usando o indice
nomes[1] = 'antonio'
console.log(nomes);

// Para saber o total de valores de um array usamos a propriedade length
console.log(nomes.length);

// Um array pode conter elementos com qualquer tipo de valor
let dados = [
    'joao',
    100,
    true,
    10.25
];
console.log(dados);

// Pode ate conter uma coleção de objetos
let clientes = [
    {nome: 'joao', idade: 48},
    {nome: 'ana', idade: 31},
    {nome: 'carlos', idade: 27},
];
console.log(clientes[1].nome);

// Se quiser iterar por todos os valores do array
clientes.forEach(cliente => {
    console.log(`O cliente ${cliente.nome} tem ${cliente.idade} anos de idade`);
});

for (let i = 0; i < clientes.length; i++) {
    console.log(`O cliente ${clientes[i].nome} tem ${clientes[i].idade} anos de idade`);
};


