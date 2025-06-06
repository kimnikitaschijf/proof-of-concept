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

app.get('/404', async function (request, response) {
    response.render('partials/404.liquid');
});

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
    console.log(`http://localhost:${app.get('port')}/`);
});
