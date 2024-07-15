//Imports
// import * as MeuModulo from './modulo1';  importa tudo que tem export.
// geralemente import Pessoa, {nome, sobrenome} from './modulo1';
import { nome as nome2, sobrenome2, idade, soma} from './modulo1';
import qualquerNome from './modulo1'; // importa só 1 Default pra poder alterar o nome.

const nome = 'João';
const p1 = new qualquerNome('Igor', 'Tanoue');
console.log(p1);
console.log(nome, sobrenome2,idade);
console.log(nome2);
console.log(soma(5,4));