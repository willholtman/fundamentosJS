// Copia de objetos

// Exemplo com primitivos - variáveis são copiadas por valor
let nome1 = 'joao';
let nome2 = nome1;

console.log(nome1);
console.log(nome2);
nome2 = 'ana';
console.log(nome1);
console.log(nome2);

// Exemplo com objetos - variáveis são copiadas por referência
const cliente1 = {
    nome: 'joao'
};
const cliente2 = cliente1;

console.log(cliente1.nome);
console.log(cliente2.nome);
cliente2.nome = 'ana';
console.log(cliente1.nome);
console.log(cliente2.nome);