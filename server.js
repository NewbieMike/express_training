const express = require('express'); //import paczki express
const path = require('path');
const hbs = require('express-handlebars');

const app = express(); //przypisujemy do stałej app aby mieć dostęp do paczki

app.engine('.hbs', hbs()); 
//app.engine pozwala zdefiniować nam, że dane pliki powinny być renderowane przez dany silnik.
app.set('view engine', '.hbs');
//pliki o rozszerzeniu .hbs powinny być obsługiwane przez silnik hbs

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	res.render('index');
}); //dodaje endpoint pod linkiem '/' wraz z połączeniem metody get

app.get('/about', (req, res) => {
	res.render('about.hbs', { layout: 'dark' });
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.get('/info', (req, res) => {
	res.render('info');
});

app.get('/history', (req, res) => {
	res.render('history');
});

app.get('/hello/:name', (req, res) => {
 res.render('hello', { name: req.params.name});
});

app.use((req, res) => {
    res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});