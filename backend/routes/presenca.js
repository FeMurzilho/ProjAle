const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Presenca');
      res.json(result.rows);
    } catch {
      res.status(500).send('Erro ao buscar presenças');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Presenca WHERE id_presenca = $1', [req.params.id]);
      res.json(result.rows[0]);
    } catch {
      res.status(500).send('Erro ao buscar presença');
    }
  });

  router.post('/', async (req, res) => {
    const { id_aluno, data_presenca, presente } = req.body;
    try {
      await pool.query('INSERT INTO Presenca (id_aluno, data_presenca, presente) VALUES ($1, $2, $3)', [id_aluno, data_presenca, presente]);
      res.status(201).send('Presença registrada');
    } catch {
      res.status(500).send('Erro ao registrar presença');
    }
  });

  router.put('/:id', async (req, res) => {
    const { id_aluno, data_presenca, presente } = req.body;
    try {
      await pool.query('UPDATE Presenca SET id_aluno = $1, data_presenca = $2, presente = $3 WHERE id_presenca = $4', [id_aluno, data_presenca, presente, req.params.id]);
      res.send('Presença atualizada');
    } catch {
      res.status(500).send('Erro ao atualizar presença');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Presenca WHERE id_presenca = $1', [req.params.id]);
      res.send('Presença deletada');
    } catch {
      res.status(500).send('Erro ao deletar presença');
    }
  });

  return router;
};
