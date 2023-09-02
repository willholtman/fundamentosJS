// Construtor de objeto
function Pessoa(nm, sn, tlf) {
    this.nome = nm;
    this.sobrenome = sn;
    this.telefone = tlf;

    this.nome_completo = function() {
        return this.nome + ' ' + this.sobrenome;
    }

    this.alterar_nome = function(novo_nome) {
        this.nome = novo_nome;
    }
}

let cliente = new Pessoa('joao', 'ribeiro', 91234567);

// console.log(cliente.nome + ' ' + cliente.sobrenome);

console.log(cliente.nome_completo());
cliente.alterar_nome('manuel');
console.log(cliente.nome_completo());

