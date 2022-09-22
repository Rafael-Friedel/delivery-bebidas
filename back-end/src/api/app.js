const express = require('express');
require('express-async-errors');

const cors = require('cors');
const registerRoute = require('../routes/register');
const ProductsRoute = require('../routes/products');
const LoginRoute = require('../routes/login');

const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static('images/public'));
app.use('/register', registerRoute);
app.use('/products', ProductsRoute);
app.use('/login', LoginRoute);

app.use(errorHandlerMiddleware);

module.exports = app;
