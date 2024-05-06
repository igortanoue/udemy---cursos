/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
Referencia (mutávlel) - array, object, function
*/
/*
PRIMITIVO
let a = 'A';
let b = a; // Cópia
console.log(a,b);

a = 'Outra coisa';
console.log(a, b);
*/
 /*
let a = [1, 2, 3];
let b = a; 
let c = [...a];  // Para fazer a copia sem ser por referencia.
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);

a.push('Luiz');
console.log(c)
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};  // para copiar igual tipo primitivo e não puxar o msm valor da memoria.

a.nome = 'João';
console.log(a);
console.log(b);