// quando a função se chama de volta no final, importante por o parametro para parar de se chamar.
function recursiva(max) {
    if (max >= 11297) return;
    max ++;
    console.log(max);
    recursiva(max);
}

recursiva(0);