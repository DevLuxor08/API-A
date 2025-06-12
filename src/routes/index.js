// ROTAS
const express = require('express');
const Empresas = require('../models/Empresas');
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
        "Empresas": Empresas
    })
})

module.exports = router;