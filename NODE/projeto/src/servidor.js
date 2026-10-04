const porta = 3000

const express = require('expres')
const app = express

app.get('./produtos', (req, res, next) => {
    res.send({nome: 'notebook', preco: 123.45}) // Converter para JKN
})