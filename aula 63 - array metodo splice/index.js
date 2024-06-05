//              0        1        2             3       4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];


//nomes.splice(indice, delete quantos elementos , elementoadd1,elementoadd2);

const removidos = nomes.splice(3, 2, 'Igor');

// simular o pop remover o ultimo elemento.
const pop = nomes.splice(-1,1);

//shift  remover o primeiro elemento
const shift = nomes.splice(0,1);

//push adicionar no ultimo elemento, porem push é mais pratico
const push = nomes.splice(nomes.length, 0, 'Luiz')

//unshift adicionar o primeiro elemento
const unshift = nomes.splice(0 , 0, 'Ana');

console.log(nomes, removidos);