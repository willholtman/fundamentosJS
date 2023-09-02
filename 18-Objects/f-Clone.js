// Clone de objetos
//metodo 1
// let user1 = {
//     nome: "joao"
// }

// let user2 = {}
// for(k in user1){
//     user2[k] = user1[k]
// }

// console.log(user1.nome);
// console.log(user2.nome);

// user2.nome = "Carlos"

// console.log(user1.nome);
// console.log(user2.nome);

//metodo 2
let usuario1 = {
    nome: "marcelo"
}

let usuario2 = {}

Object.assign(usuario2, usuario1);
console.log(usuario1.nome);
console.log(usuario2.nome);
usuario2.nome = "ricardo"
console.log(usuario1.nome);
console.log(usuario2.nome);