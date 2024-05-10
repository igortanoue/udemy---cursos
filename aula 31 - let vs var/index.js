const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// var só tem escopo dentro de uma função
// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando

// var nome2 = 'Otávio';

// console.log(nome,nome2);
// if (verdadeira) {
//     let nome = 'Otávio'; // criando
//     var nome2 = 'Rogerio' // redeclarando
//    console.log(nome, nome2)

//     if (verdadeira) {
//         var nome2 = 'Ronaldo';  //redeclarando
//         let nome = 'outra coisa';
//         console.log(nome, nome2)
//     }
// }

// function falaOi () {
//     var sobrenome = 'Miranda';
//     var nome = 'Luiz';  // escopo do function, não funciona de fora
//     console.log(nome, sobrenome);
// }

// falaOi();


console.log(sobrenome);

var sobrenome = 'Miranda'; // hoist , eleva as declarações de variavel