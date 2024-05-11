// ... rest, distribuir é ...spread
    //elementos 0 / 1 / 2 / 3 
const numeros = [100, 200 , 300, 400 , 500, 600, 700, 800, 900];

// Desestruturação pega os valores na ordem do array.   // ...resto pega o restante do array.
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres)
console.log(resto);


const num = [1,2,3,4,5,6,7,8,9];
const [un, , tr, , cin,,sete,,nove] = num;
console.log(num)