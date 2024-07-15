// Exportar..

const nome = 'Luiz';
const sobrenome= 'Miranda';
const idade = 30;

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome,sobrenome) {
        this.nome= nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome as sobrenome2, idade};

// geralmente é export em todos e exportar o modulo.