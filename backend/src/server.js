const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.listen(3333, () => {console.log('Servidor rodando em http://localhost:3333')});