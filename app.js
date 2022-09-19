const express = require('express');

const app = express();
const tourRoute = require('./routes/tour.route');

app.use(express.json());
app.use('/tour', tourRoute);

app.get('/', (req, res) => {
    res.send('App is running');
});

module.exports = app;
