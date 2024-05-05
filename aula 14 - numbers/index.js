// IEEE 754-2008 CALCULO DO JS

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // num1 = num 1 + num 2
num1 += num2;
num1 += num2;
num1 = Number(num1.toFixed(2));  // maneira adequada para arrendondar o numero e ser inteiro
console.log(num1);
console.log(Number.isInteger(num1));



/*
console.log(num1.toString() + num2);   // variavel.toString() e não altera o valor da variavel 
console.log(num1.toFixed(2)); //definir as casas decimais
console.log(Number.isInteger(num1)); // retorna se é numero inteiro ou não

let temp = num1 * 'Oi';
console.log(Number.isNaN(temp)); // Estou perguntando se essa conta é um Is not a number (conta invalida)
*/

