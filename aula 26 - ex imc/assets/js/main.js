const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento');
});


function enviar() {
    const peso = document.querySelector('.peso1');
    const altura = document.querySelector('.alt1');

    let pesoValor = Number(peso.value);
    let alturaValor = Number(altura.value);

};



