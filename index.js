//SERVIDOR

//IMPORTANDO O EXPRESS
const express = require('express');
const server = express();
const rotas = require('./src/routes');
const cors = require('cors');

server.use(cors())  

server.use(rotas);
server.use((req, res) =>{
    res.send('Rota nao encontrada')
});

server.listen(3333)