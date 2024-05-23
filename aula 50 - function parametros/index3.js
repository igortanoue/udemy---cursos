//                                   resto dos argumentos
const conta = function(operador, acumulador, ...numeros) {
    console.log(operador,acumulador,numeros);
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;

    }

    console.log(acumulador);
}

//conta('+',1,20,30,40,50);

//          Arguments                    resto dos argumentos
const acc = function(...args) {
    console.log(args);
}

acc('+',1,20,30,40,50);