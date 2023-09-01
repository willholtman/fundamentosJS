let num1 = 2
let num2 = 10

function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

console.clear();
let operacao = `Operação entre ${num1} e ${num2}`;
console.log(operacao + ' - Somar = ' + somar(num1, num2));
console.log(operacao + ' - Subtrair = ' + subtrair(num1, num2));
console.log(operacao + ' - Multiplicar = ' + multiplicar(num1, num2));
console.log(operacao + ' - Dividir = ' + dividir(num1, num2));