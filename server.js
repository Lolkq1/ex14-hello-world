const express = require('express');
const app = express();
const produtos = []
const variavel = "oi"
const jwt = require('jsonwebtoken')
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
    console.log(req.body)
    let n = {
      id: produtos.length+1,
      nome: req.body.nome,
      preco: req.body.preco
    }
     produtos.push(n)
     return res.status(201).send(n)
  })

app.get('/produtos', (req, res) => {
    return res.send(produtos)
})


app.get('/produtos/:id', (req, res) => {
    if (parseInt(req.params.id) > produtos.length+1) {
        return res.status(404).send()
    }
    return res.send(produtos[parseInt(req.params.id)-1])
})


app.put('/produtos/:id', (req, res) => {
    req.body.id = req.params.id
    produtos[req.params.id-1] = req.body
    return res.send(req.body)
  })

app.delete('/produtos/:id', (req, res) => {
    produtos.splice(req.params.id-1,1)
    return res.status(204).send()
})

app.get('/protegido', async (req, res) => {
    if (!req.header.authorization) {
        res.setHeader('Content-Type','application/json')
        return res.status(401).send(JSON.stringify({erro: "eu amo o que pipoca aff tchau tchau era pra voce ter dito tchau pipoca ah ja vou indo tambem vou tchau tchau pipoca"}))
    }
    try {
        let k = await jwt.verify(req.header.authorization.split(" ")[1], variavel)
        return res.send("autenticado")
    } catch(err) {
        res.setHeader('Content-Type','application/json')
        return res.status(401).send(JSON.stringify({erro: "eu amo o que pipoca aff tchau tchau era pra voce ter dito tchau pipoca ah ja vou indo tambem vou tchau tchau pipoca2"}))
    }
})

app.post('/login', (req, res) => {
    if (req.body.usuario === "admin" && req.body.senha === "1234") {
        let c = jwt.sign("sera q ela ja gostou de mim de verdade ou foi tudo coisa da minha cabeca pq as vezes parecia q sim as vezes parecia q nao e agora eu nao sei mais de nada", variavel)
        console.log(c)
        return res.send({token: c})
    } else {
        return res.status(401).send("qual foi")
    }
})




app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
