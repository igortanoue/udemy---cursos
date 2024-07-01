// Promises
// funcao de numero randomico
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error ('Erro')); 
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });




}
// Toda vez que o metodo Resolve for chamado o then é executado
// Toda vez que o Reject for chamado o catch é executado
esperaAi('Frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(55555555 , rand(1,3));
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu serei o ultimo a ser exibido.');
    })
    .catch(e => {
        console.log('Erro:', e);
    });
