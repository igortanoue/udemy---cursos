/*
Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros. Neste artigo, explicamos como as cadeias de protótipos funcionam e observamos como a propriedade prototype pode ser usada para adicionar métodos aos construtores existentes.

O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos — para fornecer herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades. O objeto de protótipo de um objeto também pode ter um objeto de protótipo, do qual herda métodos e propriedades, e assim por diante. Isso geralmente é chamado de cadeia de protótipos e explica por que objetos diferentes têm propriedades e métodos definidos em outros objetos disponíveis para eles.

Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade __proto__, que é derivada da propriedade prototype no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.
*/

// Construtora -> Molde ( classe )
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL'+ this.nome + ' ' + this.sobrenome; 
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome; 
}
// instância

const pessoa1 = new Pessoa('Luiz', 'Otavio'); // <- Pessoa = Funcão construtora
const pessoa2 = new Pessoa('Maria' , 'Alegria'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = função construtora


//Pessoa.prototype === pessoa1.___proto___
console.dir(pessoa1);
console.dir(data);