// === ROTAS COMPLETAS DE ALUNO ===
const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // GET todos
  router.get('/', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM Alunos');
      res.json(rows);
    } catch (err) {
      res.status(500).send('Erro ao buscar aluno');
    }
  });

  // GET por ID
  router.get('/:id', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM Alunos WHERE aluno_id = $1', [req.params.id]);
      res.json(rows[0]);
    } catch (err) {
      res.status(500).send('Erro ao buscar aluno');
    }
  });

  // POST
  router.post('/', async (req, res) => {
    const { nome, endereco, cidade, estado, cep, pais, telefone } = req.body;
    try {
      await pool.query('INSERT INTO Alunos (nome, endereco, cidade, estado, cep, pais, telefone) VALUES ($1, $2, $3, $4, $5, $6, $7)', [nome, endereco, cidade, estado, cep, pais, telefone]);
      res.status(201).send('Aluno criado');
    } catch (err) {
      console.error('Erro ao criar aluno:', err);
      res.status(500).json({ error: 'Erro ao criar aluno', details: err.message });
    }
  });

  // PUT
  router.put('/:id', async (req, res) => {
    const { nome, endereco, cidade, estado, cep, pais, telefone } = req.body;
    try {
      await pool.query('UPDATE Alunos SET nome = $1, endereco = $2, cidade = $3, estado = $4, cep = $5, pais = $6, telefone = $7 WHERE aluno_id = $8', [nome, endereco, cidade, estado, cep, pais, telefone, req.params.id]);
      res.send('Aluno atualizado');
    } catch (err) {
      res.status(500).send('Erro ao atualizar aluno');
    }
  });

  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Alunos WHERE aluno_id = $1', [req.params.id]);
      res.send('Aluno deletado');
    } catch (err) {
      res.status(500).send('Erro ao deletar aluno');
    }
  });

  return router;
};
