let nomes = ['joao', 'ana', 'carlos', 'nunes'];

// Como remover um elemento do Array? 
// Os Arrays são objetos na sua essência, portanto podemos testar o delete

delete nomes[2];
console.log(nomes);
console.log(nomes.length);

// O elemento de fato foi removido, porém seu "espaço" continua disponivel

nomes.splice(2,1); // posição inicial indice "2", remove 1 elemento a partir deste indice
console.log(nomes);
console.log(nomes.length);

// Com metodo splice o indice é alterado, e o item de fato é apagado