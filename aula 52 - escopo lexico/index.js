// escopo lexico vai de baixo para cima procurando as variaveis pelos vizinhos
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome();
}
falaNome();