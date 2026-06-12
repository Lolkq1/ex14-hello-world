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

app.post('/produtos', (req, res) => {
    let n = {
      id: produtos.length+1,
      nome: req.body.nome,
      preco: req.body.preco
    }
     produtos.push(n)
     return res.status(201).send(n)
  })


app.get('/produtos/:id', (req, res) => {
    if (!req.params.id) {
          return res.send(produtos)
    }
    if (parseInt(req.params.id) > produtos.length+1) {
        return res.status(404).send()
    }
    return res.send(produtos[parseInt(req.params.id)-1])
})


app.put('/produtos/:id', (req, res) => {
    produtos[id-1] = req.body
    return res.send(req.body)
  })

app.delete('/produtos/:id', (req, res) => {
    produtos.splice(req.params.id-1,1)
    return res.status(204).send()
})


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
