
/// objeto pega as chaves
const pessoa = {
    nome: 'Igor',
    sobrenome: 'Tanoue',
    idade: 30
};

const chave1 = 'nome';
console.log(pessoa.nome);

console.log(pessoa['nome']);

console.log(pessoa[chave1]);


for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}