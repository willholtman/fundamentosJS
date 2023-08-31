// OPERADORES DE COMPARACAO

// maior que , menor que , igual a 

// todas as comparacoes retoram um boolean true or false
/*
console.log(10 > 20);
console.log(10 < 20);
console.log(20 > 20);
console.log(20 >= 20);
console.log(20 < 20);
console.log(20 <= 20);

console.log(20 == 20);
console.log(10 == 20);
console.log(10 != 20);
console.log(20 != 20);
*/

// A verificacao de igualdade entre dois valores nao diferencia 0 do false
0 == false; //true
"" == false; //true

// com o == os operandos sao convertidos para numero, ja o === nao faz essa conversao
0 === false; //false
"" === false; //false

null == undefined; //true
null === undefined; //false

// em outras comparacoes (>  <  >=  <=) null = 0 e undefined = NaN
