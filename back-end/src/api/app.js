const express = require('express');
require('express-async-errors');

const cors = require('cors');

const router = require('../routes');
const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(errorHandlerMiddleware);

module.exports = app;
