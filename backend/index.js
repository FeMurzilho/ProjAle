const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'db', // Nome do serviço no docker-compose.yml
  database: 'postgres',
  password: 'docker',
  port: 5432,
});

// Rota GET /alunos
app.get('/alunos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM aluno');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

// Rota POST /alunos
app.post('/alunos', async (req, res) => {
  const { nome, idade } = req.body;
  try {
    await pool.query('INSERT INTO aluno (nome, idade) VALUES ($1, $2)', [nome, idade]);
    res.status(201).send('Aluno criado!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao criar aluno');
  }
});

// Rota PUT /alunos/:id
app.put('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;

  try {
    await pool.query('UPDATE aluno SET nome = $1, idade = $2 WHERE id = $3', [nome, idade, id]);
    res.status(200).send('Aluno atualizado com sucesso!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar aluno');
  }
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
