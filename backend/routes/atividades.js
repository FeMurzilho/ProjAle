const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Atividade');
      res.json(result.rows);
    } catch (err) {
      res.status(500).send('Erro ao buscar atividades');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Atividade WHERE id_atividade = $1', [req.params.id]);
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).send('Erro ao buscar atividade');
    }
  });

  router.post('/', async (req, res) => {
    const { descricao, data_realizacao } = req.body;
    try {
      await pool.query('INSERT INTO Atividade (descricao, data_realizacao) VALUES ($1, $2)', [descricao, data_realizacao]);
      res.status(201).send('Atividade criada');
    } catch (err) {
      res.status(500).send('Erro ao criar atividade');
    }
  });

  router.put('/:id', async (req, res) => {
    const { descricao, data_realizacao } = req.body;
    try {
      await pool.query('UPDATE Atividade SET descricao = $1, data_realizacao = $2 WHERE id_atividade = $3', [descricao, data_realizacao, req.params.id]);
      res.send('Atividade atualizada');
    } catch (err) {
      res.status(500).send('Erro ao atualizar atividade');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Atividade WHERE id_atividade = $1', [req.params.id]);
      res.send('Atividade deletada');
    } catch (err) {
      res.status(500).send('Erro ao deletar atividade');
    }
  });

  return router;
};
