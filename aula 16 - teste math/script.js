function verificar() {
    let n1 = document.getElementById('num1')
    let res = document.getElementById('res');
    num1 = Number(n1.value)
    res.innerHTML += (`O valor digitado foi <strong>${num1}</strong><br/>`)
    res.innerHTML += (`O valor é um <strong>${typeof num1}</strong><br/>`)
    res.innerHTML += (`O valor é inteiro? <strong>${Number.isInteger(num1)}</strong><br/>`)
    res.innerHTML += (`É NaN? <strong>${Number.isNaN(num1)}</strong><br/>`)
    res.innerHTML += (`Arrendodamento para baixo: <strong>${Math.floor(num1)}</strong><br/>`)
    res.innerHTML += (`Arrendodamento para cima: <strong>${Math.ceil(num1)}</strong><br/>`)
    res.innerHTML += (`Com 2 casas decimais: <strong>${num1.toFixed(2)}</strong><br/>`)
    res.innerHTML += (`Raiz Quadrada: <strong>${num1 **0.5}</strong>.<br/>`)
}

