const port = 3004;

const bodyParser = require('body-parser');
const server = require('express')();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(require('./cors'));
server.use(require('express-query-int')());//Para tratar parametros de query tranformado em numerico quando necessario

server.listen(port, function() {
    console.log(`rodando na porta ${port}`);
});

module.exports = server;