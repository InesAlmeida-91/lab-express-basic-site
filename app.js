const express = require('express');
const path = require('path');

const app = express();
const port = 3000

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'views')));

app.get('/home-page', (request, response, next) => {
    response.sendFile(`${__dirname}/views/home-page.html`)
});

app.get('/about-page', (request, response, next) => {
    response.sendFile(`${__dirname}/views/about-page.html`)
})

app.get('/works-page', (request, response, next) => {
    response.sendFile(`${__dirname}/views/works-page.html`)
})

app.listen(port, () => {
    console.log(`${port} is working`)
  })