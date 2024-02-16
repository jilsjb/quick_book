const express = require('express');
const app = express();
const flightRouter = require('./routes/flight');

//Methods


//Routes


// Mounting
app.use('/api/v1/flight', flightRouter);

module.exports = app;