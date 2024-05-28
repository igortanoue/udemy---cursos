// funcao construtora -> retorna objetos.
// Funcao factory -> fabrica objetos.

// Construtora -> obrigatoriamente tem que começar com Letra maiscula.

function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privados.
    const ID = 123456;

    const metodoInterno = function () {

    };

    // Atributos ou metodos publicos.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ' ' + this.sobrenome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Igor', 'Tanoue');


// palavra New, cria um objeto vazio e o this aponta o objeto vazio nova e retorna o valor p essa variavel.
p1.metodo();