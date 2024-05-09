const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento');
});


function enviar() {
    const peso = document.querySelector('#peso1');
    const altura = document.querySelector('#alt1');
    const res = document.querySelector('#res');
    const p = document.createElement('p')
    let pesoValor = Number(peso.value);
    let alturaValor = Number(altura.value);
    let imcValor = pesoValor / alturaValor ** 2 ;

    res.innerHTML += `O Peso lido foi de ${pesoValor}KG e a altura lida ${alturaValor}CM`
    res.innerHTML += `<br>O seu IMC foi de  ${imcValor}<br>`;

    p.classList.add('paragrafo-resultado');
    if (imcValor === 0 && imcValor < 18.5) {
        res.innerHTML += `Voce está na categoria <strong>Abaixo do Peso</strong>`;
    } else if(imcValor >= 18.5 && imcValor <= 24.9){
        p.innerHTML += `Voce está na categoria <strong>Peso Normal</strong>`;
    } else if(imcValor >= 25 && imcValor <= 29.99){
        res.innerHTML += `Você está na categoria <strong>Sobreso</strong>`;
    } else if(imcValor >= 30 && imcValor <= 34.99){
        res.innerHTML += `Você está na categoria Obesidade Grau 1`;
    } else if(imcValor >= 35 && imcValor <= 39.99){
        res.innerHTML += `Você está na categoria Obesidade Grau 2`;
    } else if(imcValor >= 40 && imcValor <= 100){
        res.innerHTML += `Você está na categoria Obesidade Grau 3`;
    } else {
        res.innerHTML += `Valor digitado incorreto, tente novamente.`;
    };
    res.innerHTML += `<p> ---------------------------------------------------------------------- </p>`
};


