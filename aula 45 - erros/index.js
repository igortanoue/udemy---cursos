try {
    //console.log(a)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
    // Executa quando não há erros
    try { 
        console.log(b)
    } catch (e) {
        console.log('Deu erro aqui')
    } finally {
        console.log('Aqui tbm é finally')
    }
} catch (e) {
    console.log('Tratando o erro')
    // Executa quando a erros
} finally {
    console.log('Finally: Eu sempre sou executado')
    // sempre
}