// Para cada elemento:
// Retorne apenas uma srting com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
})
// arrow function                 virou uma expressão se não as chaves do obj seria as chaves da function.
const idade= pessoas.map (obj => ({ idade: obj.idade }));
const comIds = pessoas.map (function(obj, indice) {
    const newObj = {...obj };
    newObj.id = indice + +1 ;
    return newObj;
})


console.log(idades);
console.log(nomes);
console.log(comIds);