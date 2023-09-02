// Comparação de Objetos

let obj1 = {
    valor: 10
};

let obj2 = {
    valor: 10
};

if(obj1 == obj2) {
    console.log('iguais')
}else {
    console.log('diferentes')
};

obj1 = obj2; //Aponta para o mesmo local na memoria.

if(obj1 == obj2) {
    console.log('iguais')
}else {
    console.log('diferentes')
};