//Getter e Setter
// defineProperty singular - defineProperties plural

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave.
        configurable: true, // pode reconfigurar a chave, valor , em um outro define property.
        get: function () {
            return estoquePrivado;

        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Isso não é um número!');
            }

            estoquePrivado = valor;
    }
    });
const p2 = criaProduto('Camiseta');
function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('Coisa.','');
            nome = valor;
        }
    };
}
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
//console.log(p1);
console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
console.log(p2.nome);