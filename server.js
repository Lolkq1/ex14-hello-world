const express = require('express');
const app = express();
const produtos = []
// TODO: implemente a rota GET /
// A resposta deve conter a palavra "Hello"

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

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
