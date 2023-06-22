import express from 'express';

const app = express();


const selecoes = [
  {id: 1, pais: 'brasil', grupo: 'A'},
  {id: 2, pais: 'EUA', grupo: 'B'}
]

// Criar rota padrão ou raiz.
app.get('/', (req, res) => {
  res.send('Curso de Node.JS')
})

// Lista seleção.
app.get('/selecoes', (req, res) => {
  res.send(selecoes)
})

export default app;