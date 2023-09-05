// Arrays são copiados por referência

let nomes = ['joao', 'ana', 'carlos'];
let outros_nomes = nomes; 
console.log(nomes);

outros_nomes[2] = 'antonio';
console.log(outros_nomes, nomes);