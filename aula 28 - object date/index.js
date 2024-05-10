//                     ano , mês , dia , hora , minuto , segundo , milesimo - const data = new Date(2024, 3,20,15,14,27,1000)
//const data = new Date(2024, 3,20,15,14,27,1000);         // sempre que utilizar new é uma função construtora e começa maiusculo. // (0) 01/01/1970 Timestamp unix ou época unix. 
//const data = new Date ('2024-05-09T20:20:59');
const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(Date.now()); // da o valor em milesimo de segundo e da pra jogar na new date ()
console.log(data.toString());  
