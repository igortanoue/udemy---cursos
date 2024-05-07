/*
Operadores Logicos
&& -> And -> E  -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> Ou   Alt+124  -> Se uma for verdadeira ela retorna True  - procura o primeiro valor true da expressão caso n tiver nenhuma true a ultima false retorna.

FALSY 
*false -> Qualquer coisa diferente disso é True no js
0
'' "" ``
null / undefined
NaN
*/

//console.log('Luiz Otávio' && 0 && NaN && 'Maria');
/*
function falaOi () {
    return 'Oi';
}

let vaiExecutar= 'Joãozinho';

console.log(vaiExecutar && falaOi());
*/

console.log(0 || false || null || 'Luiz Otavio' || true) // o Or so precisa de uma expressao verdadeira para retornar true. retorna o primeiro valor verdadeiro.

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
