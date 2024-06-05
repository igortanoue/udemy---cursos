// FILTER -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// retorne numeros maiores 10 

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 15, 20, 36, 3, 8, 19, 27];


// se for 10 + será true e vai retornar.
const numerosFiltrados = numeros.filter(function(valor, indice, array) {
    return valor > 10;
});
const arrowFiltrados = numeros.filter(valor => valor > 10 );

console.log(numerosFiltrados);
//console.log(arrowFiltrados);

// Retornar as pessoas que tem nome com 5 letras ou mais, com mais de 50 anos, cujo nome termina com A

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
const pessoasComNomeGrande = pessoas.filter(function(obj, ){
    return obj.nome.length >= 5;
});
const arrowPessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const arrowMaior50 = pessoas.filter(obj => obj.idade > 50);
const pessoasFinalA= pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
})


console.log(pessoasComNomeGrande);
console.log(arrowPessoasComNomeGrande);
console.log(arrowMaior50);
console.log(pessoasFinalA);