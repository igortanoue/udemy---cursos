function mostraHora () {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    })
}
 // miliseconds
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer); // para encerrar o timer
}, 10000)

setTimeout(function() {
    console.log('olá mundo!')
}, 5000)