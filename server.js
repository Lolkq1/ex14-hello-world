const express = require('express');
const app = express();
const produtos = []
// TODO: implemente a rota GET /
// A resposta deve conter a palavra "Hello"
app.use(express.json())
app.get('/busca', (req, res) => {
    if (req.query.q && req.query.pagina) {
            let a = JSON.stringify({q: req.query.q, pagina: req.query.pagina})
            return res.send(a)
    }
    if (req.query.pagina) {
        let a = JSON.stringify({pagina: req.query.pagina})
        return res.send(a)
    }
    if (req.query.q) {
        let a = JSON.stringify({q: req.query.q})
        return res.send(a)
    }
    return res.send(JSON.stringify({q: ""}))
})

// POST /echo com body { "mensagem": "olá" } → 200, mesmo JSON de volta
// POST /eco com body { "x": 1, "y": 2 } → 200, mesmo JSON de volta
// Content-Type: application/json deve estar presente na resposta

app.post('/echo', (req, res) => {
    res.setHeader('Content-Type','application/json')
    return res.send(JSON.stringify(req.body))
})

app.post('/eco', (req, res) => {
    res.setHeader('Content-Type','application/json')
    return res.send(JSON.stringify(req.body))
})

app.get('/usuarios/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    return res.send(JSON.stringify({
        id: req.params.id
    }))
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
