// Para ficar identica a funcao construtora
class Pessoa {
    //Criando um metodo, necessario para uma class.
    constructor(nome,sobrenome) {
        // corpo do método
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // ja vai direto para o proto, diferente das construtoras.
    falar() {
        console.log(`${this.nome} está falando.`)
    }
    
    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Igor', 'Tanoue');
const p2 = new Pessoa('Joana', 'Santos');
const p3 = new Pessoa('Vitao', 'Mostarda');
const p4 = new Pessoa2('Construtora','Alter')
console.log(p1);
console.log(p2);
console.log(p3);