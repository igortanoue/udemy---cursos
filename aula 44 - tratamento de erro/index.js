// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto não existe')
// }

function soma(x,y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(1,'1'));
    console.log(soma(1,4));    
} catch (err) {
    console.log(err);
}
