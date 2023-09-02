// Literal do Objeto

let cliente = {
    nome: 'joao',
    sobrenome: 'ribeiro',
    telefone: 10234567,

    nome_completo: function() {
        return this.nome + ' ' + this.sobrenome;
    },

    alterar_nome: function(novo_nome) {
        this.nome = novo_nome;
    }
};

console.log(cliente.nome);
console.log(cliente.nome_completo());
cliente.alterar_nome('manuel');
console.log(cliente.nome_completo());