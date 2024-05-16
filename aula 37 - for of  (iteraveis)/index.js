const nome = ['luiz', 'Otávio','Henrique'];

// for (let i = 0; i < nome.length;i++) {
//     console.log(nome[i]);
// }


// Retorna o indice.
for (let i in nome) {
    console.log(nome[i]);
}

console.log('***');

// Retorna o valor. Objeto não é iteravel.
for (let valor of nome) {
    console.log(valor);
}

//--------------------
console.log('######')
nome.forEach(function(valor,indice,array){
    console.log(valor, indice,array);
})