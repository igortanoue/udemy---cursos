// IIFE -> Immediately invoked function expression
//(function)();
(function(idade,peso,altura){
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'))
    }
    falaNome();
    console.log(idade,peso,altura);
})(30, 76, 1.80);

(function(){

})();