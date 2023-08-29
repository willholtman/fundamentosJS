// Condicionais

// IF statemente e ? operator

let valora = 10;
let valorb = 20;

if (valora < valorb) {
    console.log('ok!')
}

if ( valora < valorb) console.log('ok!!')

// ELSE

if(condição) {
    // se condição verdadeira executar este codigo
} else {
    // se condição falsa executar este codigo
}

// ELSE IF
if(condição1) {
    // se condição1 for verdadeira
}else if(condição2) {
    // se condição2 for verdadeira
}else if(condição3) {
    // se condição3 for verdadeira
}else {
    // se todas condições forem falsas
}

// CONDITIONAL OPERATOR
let nome = "joao";
let verificacao = nome = "joao" ? "sim" : "nao";
console.log("o usuario esta autorizado " + verificacao);