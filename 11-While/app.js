/*
Os ciclos existem nas linguagens de programação para repetirmos a execução de ações.
Por exemplo, se quisermos apresentar um conjunto de 10 operações baseadas no mesmo algoritimo, 
não é necessário repetir 10 vezes o mesmo código.

Se for necessário apresentar a lista de todos os elementos de uma coleção, não será necessário criar o código para apresentar cada um deles.
*/

// WHILE

// while(condicao) {
//     // executar codigo 
// }

let num1 = 1;
while(num <= 10) {
    console.log(num);
    num++;
}

let num2 = 10;
while(num <= 1) {
    console.log(num);
    num--;
}

// Pode ser escrito sem chaves se tiver apenas uma ação
let num3 = 1;
while(num3 <= 10) console.log(num3++);

// DO ... WHILE
let num4 = 1;
do {
    console.log(num4);
    num4++;
}while (num4 <= 10);

// Opção para quebra de ciclo com break
let num5 = 1;
do {
    console.log(num5);
    num5++;
    if(num5 > 6) break;
}while (num5 <= 10);