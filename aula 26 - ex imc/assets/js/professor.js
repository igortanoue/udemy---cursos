const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {            // tirando o evento de enviar o formulario.
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso1');
    const inputAltura = e.target.querySelector('#alt1');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true);


});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) return nivel[4];        // quando é so 1 linha pode fazer isso.
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    let imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {        // apenas cria paragrafo.
    const p = document.createElement('p');
    return p;                           // nada abaixo de return é realizado.
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#res')
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
}