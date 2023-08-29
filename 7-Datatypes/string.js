// String é um tipo de valor que é definido entre aspas
// Ecistem 3 tipos de aspas: aspas simples, aspas duplas e cráse

let valor1 = 'texto';
let valor2 = "texto";
let valor3 = `texto`;

// nos primeiros dois casos, as funcoes são semelhantes;
// no terceiro caso, sao consideradas aspas com funcionalidades;

let nome = "joao";
console.log(`Bom dia, ${nome}.`);
console.log(`O resultado de 10 + 20 é ${10 + 20}.`);

// a expresao dentro de ${......} é avaliada e transformada em resultado.
// é conhecida como interpolação de String ou template string. 
// os dois primeiros exemplos nao tem esta funcionalidade.