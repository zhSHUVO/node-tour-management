const express = require('express');
const cors = require('cors');

const app = express();
const tourRoute = require('./routes/tour.route');

app.use(express.json());
app.use(cors());
app.use('/', tourRoute);

// app.get('/', (req, res) => {
//     res.send('App is running');
// });

module.exports = app;
