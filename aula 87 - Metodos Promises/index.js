// Promises
// funcao de numero randomico
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false); 
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
// All Executa todas promise - se uma cair no erro vai rejeitar todas.
// Race - Corrida quem vai ser resolvida primeiro entrega o valor.
// Resolve - 
const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 100),
    esperaAi(1000, 1000),

];

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro)
    });

function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.reject('Pagina em cache');
        return;
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log(e => console.log('ERRO', e));
    });