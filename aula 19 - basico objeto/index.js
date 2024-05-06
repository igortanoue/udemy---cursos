
function criaPessoa (nome,sobrenome,idade){         //Parametro
    return {  // nome, sobrenome, idade FUNCIONA DESSA FORMA TAMBEM
        nome: nome,                               // retorna um objeto literal {}
        sobrenome: sobrenome,
        idade: idade
    };
}
let pessoa1= criaPessoa('Luiz','Otavio',25);             //Argumento
let pessoa2= criaPessoa('Maria','Silva',45);  
let pessoa3= criaPessoa('Carlos','Souza',23);  
let pessoa4= criaPessoa('José','Matia',73);  
let pessoa5= criaPessoa('Jean','Cruz',56);  



console.log(pessoa1.nome);


/*
const pessoa1 = {     
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25 
};
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 42 
};

console.log(pessoa1.sobrenome);
*/