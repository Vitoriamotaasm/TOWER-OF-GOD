const express = require('express');
const app = express();
const port = 3000;

// Middleware para lidar com JSON no corpo da requisição
app.use(express.json());

// Dados simulados para a API
const posts = [
  { id: 1, title: "Post 1", content: "Conteúdo do post 1" },
  { id: 2, title: "Post 2", content: "Conteúdo do post 2" }
];

// Endpoint para obter todos os posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Endpoint para criar um novo post
app.post('/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API falsa rodando em http://localhost:${port}`);
});
