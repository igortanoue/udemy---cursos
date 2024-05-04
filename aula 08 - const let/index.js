/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925
Luiz otavio nasceu em 1980
*/

const nome = 'Igor Tanoue';
const sobrenome = 'Tanoue';
const idade = 25;
const peso = 80;
const altura = 1.80;
let imc;
let anoNascimento;
imc = peso / (altura * altura)
anoNascimento = 2024 - idade
console.log(`${nome} ${sobrenome} tem ${idade} e pesa ${peso} altura de ${altura} dando um IMC de ${imc} o ${nome} nasceu em ${anoNascimento}`)
console.log(anoNascimento)
console.log(imc)