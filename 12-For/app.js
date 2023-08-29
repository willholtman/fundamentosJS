// FOR

/* 
O ciclo FOR é um dos mais utilizados na programação.
*/

/*
for(inicio; condição; passos) {
    ações
}
*/

for(let numero1 = 1; numero1 <= 10; numero1++){
    console.log(numero1);
}


//Tambem pode ser declarado da seguinte forma:
let numero2 = 1
for(; numero2 <= 10; numero2++){
    console.log(numero2);
}

//Ou ainda:
let numero3 = 1
for(; numero3 <= 10;){
    console.log(numero3++);
}

// Parando o loop
for(let numero4 = 1; numero4 <= 10; numero4++){
    if (numero4 == 5) continue;
    console.log(numero4);
}

for(let numero5 = 1; numero5 <= 10; numero5++){
    console.log(numero5);
    if (numero5 == 5) break;
}

// Loops aninhados
for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        console.log(`${valor1} X ${valor2} = ${valor1 * valor2}`);
    }
}

// Sair de um loop aninhado com labels
ciclo: for(let valor3 = 1; valor3 <= 4; valor3++){
    for(let valor4 = 1; valor4 <= 3; valor4++){
        if(valor3 * valor4 == 6) break ciclo;
        console.log(`${valor3} X ${valor4} = ${valor3 * valor4}`);
    }
}
console.log('fim');