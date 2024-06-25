function Produto(nome, preco) {
    this.nome = nome;
    this.preco= preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta' , 50);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2,Produto.prototype); // setando o prototype igual do Produto. p1
// p1.desconto(10);
p2.aumento(10);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.nome = 'Lápis'
p3.preco = 5
p3.aumento(10);
console.log(p3);

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 110
    },
    tamanho: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 40
    },
});
p4.aumento(10);
console.log(p4);