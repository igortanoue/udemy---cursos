require('dotenv').config();
const express = require('express');
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://igortanoue:bigodinho123@cursojs01.nbgy9.mongodb.net/?retryWrites=true&w=majority&appName=cursojs01";

const mongoose = require('mongoose');
const connect = 'mongodb+srv://igortanoue:bigodinho123@cursojs01.nbgy9.mongodb.net/?retryWrites=true&w=majority&appName=cursojs01authSource=admin';
mongoose.connect(uri)
    .then(() => {
        app.emit('Pronto');
    })
    .catch(e => console.log(e));



const routes = require('./routes');
const path = require('path');


app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');

//Nossos próprios middlewares

app.use(routes);
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})


