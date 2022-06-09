const express = require('express');


const tipsRouter = require('./tips');
const notesRouter = require('./notes');
// TODO: import your diagnostics route

const app = express();

app.use('/tips', tipsRouter);
app.use('/notes', notesRouter);
// TODO: Initialize diagnostics route

module.exports = app;
