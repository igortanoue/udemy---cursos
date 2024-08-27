require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connect = 'mongodb+srv://igortanoue:bigodinho123@cursojs01.nbgy9.mongodb.net/?retryWrites=true&w=majority&appName=cursojs01';
mongoose.connect(connect, {useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
        app.emit('Pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

const sessionOptions = session({
    secret : 'asasasdadadsa',
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60  * 60 * 24 * 7,
        httpOnly: true
    },
    store : MongoStore.create({mongoUrl: connect})
});
app.use(sessionOptions);
app.use(flash());


app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})


