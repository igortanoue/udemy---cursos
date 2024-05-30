// 
const nomes = ['Eduardo','Maria','Joana'];
const novo = [...nomes]; // Copia real, sem ser por referencia

// Funciona para String, Objetos, Funcoes
//const nomes = new Array('Eduardo','Maria','Joana');
// pop final do array, shift é no inicio.
nomes[2] = 'João';
delete nomes[2];
nomes.push('Claudio'); // adiciona no final do array.
nomes.unshift('Wallace'); // adiciona no começo.  // shift tira.
const slice1 = nomes.slice(1,-1);
console.log(slice1);
console.log(nomes.length)
console.log(nomes);

const sepa = 'Igor Fuliotto tanoue';
const completo = sepa.split(' ');
console.log(completo)