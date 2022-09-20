const express = require('express');
require('express-async-errors');

const router = require('../routes');
const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(errorHandlerMiddleware);

module.exports = app;
