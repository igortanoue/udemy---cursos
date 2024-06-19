// defineProperty singular - defineProperties plural

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave.
        value: estoque, // precisa definer o value, se não fica undefined
        writable: false, // se o valor pode ser alterado
        configurable: true // pode reconfigurar a chave, valor , em um outro define property.
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: true
        },

    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));