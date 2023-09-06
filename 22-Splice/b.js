console.clear();

// Os elementos eliminados sao devolvidos pelo splice em forma de um novo array

let nomes = ['joao', 'ana', 'carlos', 'nunes'];

let nomes_removidos = nomes.splice(2);
console.log(nomes);
console.log(nomes_removidos);