class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    // Método de instancia
    diminuirVolume() {
        this.volume -= 2;
    }
    // Método de estátitico
    static trocaPilha() {
        console.log('Ok, vou trocar.');
        console.log(this.volume);
        console.log(this);
    }

    static soma(x,y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
// acessando um método estático. sem dados da instancia.
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(2,4));