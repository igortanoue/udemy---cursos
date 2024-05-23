
// arguments que sustenta todos argumentos enviados.
function funcao(a,b,c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);

}
//     Argumento
funcao(1, 2, 9, 4, 5, 6, 7, 8);