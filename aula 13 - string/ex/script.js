
function finalizar() {
    let tn1= window.document.getElementById('nm1')
    let res = document.getElementById('res')
    let n1 = String(nm1.value)
    
    res.innerHTML += `O nome digitado foi <strong>${n1}</strong> <br />`;
    res.innerHTML += `Seu nome tem <strong>${n1.length}</strong> Letras<br />`
    res.innerHTML += `A segunda letra do seu nome é: <strong>${n1[1]}</strong><br />`
    res.innerHTML += `Qual o primeiro indice de LETRA 'O'  no nome? é <strong>${n1.indexOf('o')}</strong><br />`
    res.innerHTML += `Qual o ultimo indice da letra 'O' do seu nome? <strong>${n1.lastIndexOf('o')}</strong><br />`
    res.innerHTML += `As ultimas 3 letras do seu nome são: <strong>${n1.slice(-3)}</strong><br />`
    res.innerHTML += `As palavras do seu nome são: <strong>${n1.split(' ')}</strong><br />`
    res.innerHTML += `Seu nome com letras maiusculas: <strong>${n1.toUpperCase()}</strong><br />`
    res.innerHTML += `Seu nome com letra minuscula: <strong>${n1.toLowerCase()}</strong><br />`

}
