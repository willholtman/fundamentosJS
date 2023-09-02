// Mais detalhes sobre Objects

let nacionalidade = 'Portugal';
const cliente = {
    nome: 'joao',
    sobrenome: 'ribeiro',
    telefone: 901234567,
};

if("telefone" in cliente) {
    console.log(cliente.telefone);
}else {
    console.log("não existe telefone no cliente");
}

// console.log(cliente.nome);
// console.log(cliente.sobrenome);
// console.log(cliente.telefone);

for(key in cliente){
    console.log(key + ': ' + cliente[key]);
}



// Mais detalhes sobre Objects

const setores = {
    1: 'Armazém',
    2: 'Fábrica',
    3: 'Escritório',
    4: 'Loja',
}

for(key in setores) {
    console.log(key);
}


