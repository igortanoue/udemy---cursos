const express = require ('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Luiz', sobrenome: 'Miranda' };
//     console.log();
//     console.log('Passei no seu middleware.');
//     console.log();
//     next();
// }

// Rotas da Home
route.get('/', homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
});
route.post('/', homeController.trataPost);


// Rotas de contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route;