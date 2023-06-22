import express from 'express';

const app = expre

// Criar rota padrão ou raiz.
app.get('/', (req, res) => {
  res.send('Olá')
})

export default app;