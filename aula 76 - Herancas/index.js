// Camiseta , caneca , lápis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this,nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;   // como alterar o nome do construtor quando se herda de outro proto.

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'mumber') return;
            estoque = valor;

        }
    })




}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca ('Avengers', 50, 'Porcelana',50)
camiseta.aumento(100);
console.log(camiseta);
console.log(produto);
console.log(caneca)