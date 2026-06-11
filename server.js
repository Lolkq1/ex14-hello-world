const express = require('express');
const app = express();

// TODO: implemente a rota GET /
// A resposta deve conter a palavra "Hello"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
