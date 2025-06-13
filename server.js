import express from 'express';

import { Liquid } from 'liquidjs';

// import { readFile } from 'node:fs/promises'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const engine = new Liquid();
app.engine('liquid', engine.express());

app.set('views', './views');

app.get('/', async function (request, response) {
  const apiUrl = 'https://open-jii-api-mock.onrender.com/api/v1/experiments?status=published';
  const fetchResponse = await fetch(apiUrl);
  const data = await fetchResponse.json();

  const experiments = data.data || data.experiments || data;

  response.render('index.liquid', {
    experiments,
    title: 'Published experiments'
  });
});

app.get('/:id', async function (request, response) {
  const id = request.params.id;
  const idUrl = `https://open-jii-api-mock.onrender.com/api/v1/experiments?status=published&id=${id}`;

  const fetchResponse = await fetch(idUrl);
  const data = await fetchResponse.json();

  const experiment = Array.isArray(data) ? data[0] : data;

  response.render('detail.liquid', {
    experiment
  });
});

app.post('/create-experiment', async function (request, response) {
  const { name, description, data } = request.body;

  await fetch('https://open-jii-api-mock.onrender.com/api/v1/experiments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, data })
  });

  response.redirect('/');
});




app.get('/404', async function (request, response) {
  response.render('partials/404.liquid');
});

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}/`);
});
