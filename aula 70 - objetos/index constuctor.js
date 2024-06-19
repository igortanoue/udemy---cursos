//Constuctor

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// {} < - this - > this
const p1 = new Pessoa('Luiz', 'Miranda');
// Pode alterar o valor da const , a referencia de memoria não pode...
p1.nome = 'Outra Coisa';

const p2 = new Pessoa('João', 'Cleber');
Object.freeze(p2); // Para não alterar o valore de um objeto ou array
console.log(p1, p2)