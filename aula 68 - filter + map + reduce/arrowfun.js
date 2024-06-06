// Retorne a somba do dobro de todos os pares
// Fltrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor=> valor * 2 )
    .reduce((acumulador,valor) => acumulador + valor);
// [ 50, 80, 2, 4, 6, 22 ] pares
// [ 100, 160, 4, 8, 12, 44 ] dobro 
console.log(numerosPares);
