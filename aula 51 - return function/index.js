// funcao que não retorna valor.
// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Luiz','Otavio');
const p2 = {
    nome: 'João',
    sobrenome:'Oliveira'
};

console.log(p1, p2);

// Avancada
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' '+ resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(fala);