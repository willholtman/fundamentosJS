// Copie e cole o código que deseja testar para uma melhor visualização:
ciclo: for(let valor3 = 1; valor3 <= 4; valor3++){
    for(let valor4 = 1; valor4 <= 3; valor4++){
        if(valor3 * valor4 == 6) break ciclo;
        console.log(`${valor3} X ${valor4} = ${valor3 * valor4}`);
    }
}
console.log('fim');