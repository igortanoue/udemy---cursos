/* 
Metodos uteis para objetos
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

*/
/*
Object.keys ( retorna as chaves)
Object.freeze ( congela o objeto)
Object.defineProperties (Define varias propriedades)
Object.defineProperty (define uma propriedade) 
*/
// Copiar um Obj.
const produto = { 
    nome: 'Caneca', 
    preco: 1.8
};
Object.freeze(produto); // não da pra alterar mais nada do objeto.

const caneca = {
    ...produto,
    material: 'porcelana'
};
const caneca2 = Object.assign({},caneca, {tamanho: 'médio'});
Object.defineProperty(caneca2, 'tamanho', {
    writable:false,
    configurable: false,
})
console.log(produto);
console.log(caneca);
console.log(caneca2);

console.log(Object.keys(caneca2));
caneca2.tamanho = 'Gigante';
console.log(Object.getOwnPropertyDescriptor(caneca2,'tamanho')); // ve as propriedades
console.log(Object.values(caneca2)); // ve os valores
console.log(Object.entries(caneca2)); // faz um array com os valores e chaves separados.

for( let valor of Object.entries(caneca2)) {
    console.log(valor[0], valor[1]);
}

