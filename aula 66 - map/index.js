// Recebe função de callback, retorna um novo array modificado.

// Dobrar os valores

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(function(valor,indice,array){
//    console.log(valor,indice,array)
return `Original ${valor} -> Dobrado ${valor*2}`;
});

console.log(numerosDobrados);