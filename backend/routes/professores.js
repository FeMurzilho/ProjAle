const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Professor');
      res.json(result.rows);
    } catch {
      res.status(500).send('Erro ao buscar professores');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Professor WHERE id_professor = $1', [req.params.id]);
      res.json(result.rows[0]);
    } catch {
      res.status(500).send('Erro ao buscar professor');
    }
  });

  router.post('/', async (req, res) => {
    const { nome_completo, email, telefone } = req.body;
    try {
      await pool.query('INSERT INTO Professor (nome_completo, email, telefone) VALUES ($1, $2, $3)', [nome_completo, email, telefone]);
      res.status(201).send('Professor criado');
    } catch {
      res.status(500).send('Erro ao criar professor');
    }
  });

  router.put('/:id', async (req, res) => {
    const { nome_completo, email, telefone } = req.body;
    try {
      await pool.query('UPDATE Professor SET nome_completo = $1, email = $2, telefone = $3 WHERE id_professor = $4', [nome_completo, email, telefone, req.params.id]);
      res.send('Professor atualizado');
    } catch {
      res.status(500).send('Erro ao atualizar professor');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Professor WHERE id_professor = $1', [req.params.id]);
      res.send('Professor deletado');
    } catch {
      res.status(500).send('Erro ao deletar professor');
    }
  });

  return router;
};
