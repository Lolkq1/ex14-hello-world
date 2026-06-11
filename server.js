const express = require('express');
const app = express();
const produtos = []
// TODO: implemente a rota GET /
// A resposta deve conter a palavra "Hello"
app.post('/produtos', (req, res) => {
  let b=""
  req.on("data", (chunk) => {
    b+=chunk
  })
  req.on("end", () => {
    let b2 = JSON.parse(b)
    let n = {
      id: produtos.length
      nome: b2.nome,
      preco: b2.preco
    }
  })
  return res.status(201).send(n)
});

app.get('/produtos', (req, res) => {
  return produtos
})

app.get('/produtos/1', (req, res) => {
  return res.send(produtos[1])
})

app.put('/produtos/:id', (req, res) => {
   let b=""
  req.on("data", (chunk) => {
    b+=chunk
  })
  req.on("end", () => {
    let b2 = JSON.parse(b)
    produtos[id] = b2
    return res.send(b2)
  })
})

app.delete('/produtos/1', (req, res) => {
  return res.status(204).send()
})

app.get('/produtos/999', (req, res) => {
  return res.status(404).send()
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
