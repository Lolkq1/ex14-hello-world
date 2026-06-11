const express = require('express');
const app = express();

// TODO: implemente a rota GET /
// A resposta deve conter a palavra "Hello"
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/sobre', (req, res) => {
  res.send('Sobre');
});

app.get('/contato', (req, res) => {
  res.send('Contato');
});

app.get('/rota-inexistente', (req, res) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
