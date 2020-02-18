const express = require('express')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())

dados = []

server.get('/', (req, res) => {
    res.send('<h1>home</h1>')
})

server.post('/contato', (req, res) => {
    dados.push(req.boy)
    res.json({ status: 'Das um banho!' })
})

server.get('/contato', (req, res) => {
    res.send(`
        <form action="/contato" method="POST">
            <input for="nome" name="nome" id="nome"></input>
            <input for="peso" name="peso" id="peso"></input>
            <input type="submit" value="Cadastrar"></label>
        </form>
    `)
})

server.listen(3001, () => {
    console.log('Servidor de pé em http://localhost:3001')
    console.log('Para desligar o servidor: ctrl + c')
})