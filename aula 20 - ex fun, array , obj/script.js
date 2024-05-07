// IIFE
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.res');
    const pessoas = [];

    function criaPessoa(nome = '', sobrenome = '', peso = 0, altura = 0) {
        return {
            nome, sobrenome, peso, altura
        };
    }
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let nomeValor = String(nome.value)
        let sobrenomeValor = String(sobrenome.value)
        let pesoValor = Number(peso.value)
        let alturaValor = Number(altura.value)
        console.log(nomeValor, sobrenomeValor, pesoValor, alturaValor);
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

    /*
    form.onsubmit = function (evento) {
        evento.preventDefault();          // foi prevenido o envio do formulario
        alert(1);
        console.log('Foi Enviado')
    };
    */



}

/*
function criaPessoa ( nome, sobrenome, peso, altura) {
    return {
        nome, sobrenome, peso, altura
    };
}

function enviar(){
    let pessoa1 = criaPessoa(document.getElementById('nome'), document.getElementById('sobrenome'), document.getElementById('peso'), document.getElementById('altura'))
    res.innerHTML += `${pessoa1}`
}

*/