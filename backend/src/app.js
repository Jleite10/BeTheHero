const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


/*
Métodos http:

Get: Buscar/listar informção
Post: Criar informação
Put: Alterar informação
Delete: Deleta informação

*/

/*
Tipos de parâmetros:

Query: Parâmetros nomeados enviados na rota após "?"(filtros,paginação)
Route: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Bancos de dados:

SQL: MySQL, SQLite, PostgreSQL, Oracle
NoSQL: MongoDB, CouchDB

*/

/*
Driver: SELECT * FROM USERS

Query Builder: table('users').select('*').where()
*/