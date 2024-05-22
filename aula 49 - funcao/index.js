// Declaração de função ( Function hoisting ) hoisting = eleva as declarações de funcções para o topo do js, pode ser chamada antes ou depois de criar ela.
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects ( Objetos de primeira classe.) -- podemos tratar como um dado.
// Function expression - 
const souUmDado = function () {
    console.log('Sou um dado.');
}


function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo: ')
    funcao();
}

executaFuncao(souUmDado)

// Arrow function 
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
    falar() {
        console.log('Estou falando..');
    }
};
obj.falar();