// Factory function / constructor functions -- Criar objetos.. com padrões // Classes para criar objetos syntase sugar


//Factory
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        // Se não usasse o get, apenas nomeCompleto() na chamada vc teria que por p1.nomeCompleto()
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto)



