import express from 'express';
import { Liquid } from 'liquidjs';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

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
  const idResponse = await fetch (`https://open-jii-api-mock.onrender.com/api/v1/experiments/${id}`);

  const idData = await idResponse.json();
  
  const columnData = idData.data.columns
  console.log(columnData)

  response.render('detail.liquid', {
    experiment: idData,
    column: columnData
  });
});

// app.get('/experiment/:id', async (req, res) => {
//     // make a page for the selected project on the homepage
//     const experimentId = req.params.id;

//     const homeResponse = await fetch(`https://open-jii-api-mock.onrender.com/api/v1/experiments/${experimentId}`); //get the data of selected project with the filter

//     const experimentData = await homeResponse.json();

//     let experimentColumns

//     if (experimentData.data){ 
//        experimentColumns = experimentData.data.columns
//     }
//     // console.log(experimentColumns) 

//     res.render('experiment', { experiment: experimentData, column: experimentColumns});
// });




app.post('/create-experiment', async function (request, response) {
  const { name, description, data } = request.body;

  const experiment = {
    id: uuidv4(),
    name,
    description,
    data,
    status: "published",
    visibility: "public",
    embargoIntervalDays: 0,
    createdAt: new Date().toISOString()
  };

  await fetch('https://open-jii-api-mock.onrender.com/api/v1/experiments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(experiment)
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
