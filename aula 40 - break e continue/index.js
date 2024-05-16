const numeros = [1,2,3,4,5,6,7,8,9];
// continue continuia para proxima iteração
// break sai do laço
//                 iteração
for (let numero of numeros) {

    if (numero === 2 ) {
        console.log(`Pulei o numero ${numero}`)
        continue;
    }
    if (numero % 2 === 0) {
        console.log(`Pulei o número ${numero}`)
        continue;
    }
    if (numero === 7) {
        console.log(`Valor solicitado ${numero} encontrado `)
        break;

    }
    
    console.log(numero)
}