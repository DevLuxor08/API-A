// ROTAS ** PRECISAM IMPORTAR
const express = require('express');
const Empresas = require('../models/Empresas');
const Servicos = require('../models/Servicos');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        "Status": "API rodando na porta 3333"
    })
})

router.get('/ping', (req, res)=>{
    res.json({
        "pong": "true"
    })
});

router.get('/empresas', (req, res) =>{
    res.json({
        "empresas": Empresas
    })
})

router.get('/servicos', (req, res) =>{
    res.json({
        "Servicos": Servicos
    })
})

module.exports = router;