/*
let umaString= "Um\"texto\"";   // barra invertida escape
console.log(umaString);
*/

let umaString= "Um texto";
console.log(umaString.charAt(3));   // .charAt()metodo pra mostrar o elemento, igual o []

console.log(umaString.indexOf('texto'))//.indexOf Pesquisa o elemento inicial da string, caso o final é lastIndexOf

console.log(umaString.match(/[a-z]/g)); // procura uma expressão regular, essa seria todas letras minuscular no texto

console.log(umaString.replace('Um', 'Outro')) // replace substitui

elementos = umaString.length;
//console.log(umaString.slice(2,5)); // corta a string pelos elementos (-2) Começa do penultimo elemento

console.log(umaString.split(' ',2)); // separa as string

//olhar a documentação na w3scholl js  //mdn javascript

console.log(umaString.toUpperCase()); // maiuscula, minuscula é toLowerCase() método.