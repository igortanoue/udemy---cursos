//Some todos os numeros ( reduce)
//Retorne um array com os pares ( Filter )
// Retorne um array com o dobro dos valores (Map)


const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0){
        acumulador = acumulador + valor;
    }
    return acumulador;
},0);
// valor opcional para iniciar o acumulador.
console.log(total);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 69},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Alter', idade: 74},
];
const maisVelha = pessoas.reduce(function(acumulador,valor){

    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);