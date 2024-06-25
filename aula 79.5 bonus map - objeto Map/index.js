// documentação map https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
];

// const novasPessoas = {};
// for (const {id, nome } of pessoas) {
//     novasPessoas[id] = {id, nome};
// }

// retorna em ordem crescente..



const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa; 
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}

