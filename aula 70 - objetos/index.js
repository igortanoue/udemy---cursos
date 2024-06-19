// literal 
const pessoa = {
// Chaves  // Valor
    nome: 'Luiz', 
    sobrenome: 'Otávio',
    idade: 15
};

const chave = 'idade';
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
console.log(pessoa[chave]);

// construtor 
const pessoa1 = new Object();
pessoa1.nome = 'Igor';
pessoa1.sobrenome= 'Tanoue;'
pessoa1.idade = 30;

pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return  dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

//console.log(pessoa1.getDataNascimento());

