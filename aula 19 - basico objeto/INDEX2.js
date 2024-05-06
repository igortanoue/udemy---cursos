const pessoa1 = {     
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {                                                               //cada metodo tem q separar por virgula
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);  //this representa esse objeto
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala()