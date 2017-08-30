const pasta = require('express');

const app = pasta();

app.set('views', 'htmls');

app.set('view engine', 'ejs'); // npm package derecha

app.use(pasta.static('public'));

app.get('/', (request, response, next) => {

  response.render('home.ejs');
});

app.get('/about', (request, response, next) => {
  response.render('aboutpage.ejs');
});

app.get('/pasta', (request, response, next) => {
  response.render('pasta.ejs');
});

app.listen(3000);
