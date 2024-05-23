function funcao(a, b = 5, c = 4) {
    console.log(a + b + c);

}
// enviar undefined, leva o valor padrão do paramentro da function.
funcao(2, undefined, 5);

// atribuição via desestruturação
function func({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Luiz', sobrenome: 'Otavio', idade: 20 }
func(obj)
//array
function arr([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

arr(['Luiz otávio', 'Miranda', 30]);

