class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado){
            console.log(this.nome + ' já ligado ');
            return;
        } 
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado){
            console.log(this.nome + ' já desligado ');
            return;
        } 
        this.ligado = false;
    }
}
// como herda tudo dessa classe.
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);  // chamando o construtor da super class.
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor (nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o metodo ligar.');
    }
    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('iPhone', 'Preto','15 Pro Max');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falaOi();
