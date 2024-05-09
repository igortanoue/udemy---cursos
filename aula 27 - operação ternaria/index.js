// (condicao) ? 'Valor para Verdadeiro'  : 'Valor para falso';  

const pontuacaoUsuario = 999;         //   Verdadeira acontece isso    // Ou se não acontece isso.
const nivelUsario = pontuacaoUsuario >= 1000 ? 'Usuário VIP'             : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';     // fall back valor padrao 

console.log(nivelUsario, corUsuario)


//if (pontuacaoUsuario>= 1000) {
//    console.log('Usuario VIP');
//} else {
//    console.log ('Usuario Normal');
//}

