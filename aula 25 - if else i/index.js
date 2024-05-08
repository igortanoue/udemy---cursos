 // Condições do if, para quando achar a primeira True.

const numero = 10;

if (1 === 1) {        
    console.log('Literal');
}
if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8){
    console.log('Número está entr 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('Número está entre 9 e 11.');
} else {
    console.log('O número não esta entre 0 e 11.');
}

console.log('...Aqui vai o resto do codigo.');