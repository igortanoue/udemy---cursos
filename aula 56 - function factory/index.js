
// factory function ( Funcão fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter como não tem nada para setar.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
            this.sobrenome = valor.join(' ');
        },
        fala: function (assunto) { // quando uma funcao está dentro de uma function é chamada de metodo
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,

        // Getter - para obter o valor.
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);


        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
const p3 = criaPessoa('Ana', 'Clara', 1.7, 56);

console.log(p1.nome);
console.log(p1.sobrenome);
p1.nomeCompleto = 'Igor Fuliotto tanoue';
console.log(p3.nomeCompleto)
console.log(p3.imc);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);

console.log(p1.imc);

// Constuctor function ( Função construtora)