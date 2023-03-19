require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//midelwares
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Oscar',
        titulo: 'Bienvenido Usuario'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Oscar',
        titulo: 'Bienvenido Usuario'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Oscar',
        titulo: 'Bienvenido Usuario'
    })
});

app.get('/index', (req, res) => {
    res.render('home', {
        nombre: 'Oscar',
        titulo: 'Bienvenido Usuario'
    })
});

app.get('*', (req, res) => {
    res.render('home', {
        nombre: 'Oscar',
        titulo: 'Bienvenido Usuario'
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})