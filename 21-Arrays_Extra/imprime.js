// exitem outras formas de iteração nos Arrays
let nomes = ['joao', 'ana', 'carlos'];

for(let nome of nomes) {
    console.log(nome);
}

for(let key in nomes) {
    console.log(nomes[key]);
}