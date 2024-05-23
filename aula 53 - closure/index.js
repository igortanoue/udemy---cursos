function retornaFuncao(nome) {

    return function () {
// closure é a habilidade que a funcao tem de acessar seu escopo lexico, da mãe e global.
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
// dir para ver os escopos.
console.dir(funcao);

console.log(funcao(), funcao2());