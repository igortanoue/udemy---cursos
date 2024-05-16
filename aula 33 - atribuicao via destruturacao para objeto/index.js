const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
// Atribuição via desestruturação  // muda o nome da chave o :
//const { nome = 'Não existe',sobrenome: teste } = pessoa;
//const { endereco: { rua, numero }, endereco } = pessoa;
const { nome, ...resto} = pessoa;
console.log(nome, resto)

// console.log(nome,teste);
// console.log(rua,numero);
