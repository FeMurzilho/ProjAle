const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Turma');
      res.json(result.rows);
    } catch {
      res.status(500).send('Erro ao buscar turmas');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Turma WHERE id_turma = $1', [req.params.id]);
      res.json(result.rows[0]);
    } catch {
      res.status(500).send('Erro ao buscar turma');
    }
  });

  router.post('/', async (req, res) => {
    const { nome_turma, id_professor, horario } = req.body;
    try {
      await pool.query('INSERT INTO Turma (nome_turma, id_professor, horario) VALUES ($1, $2, $3)', [nome_turma, id_professor, horario]);
      res.status(201).send('Turma criada');
    } catch {
      res.status(500).send('Erro ao criar turma');
    }
  });

  router.put('/:id', async (req, res) => {
    const { nome_turma, id_professor, horario } = req.body;
    try {
      await pool.query('UPDATE Turma SET nome_turma = $1, id_professor = $2, horario = $3 WHERE id_turma = $4', [nome_turma, id_professor, horario, req.params.id]);
      res.send('Turma atualizada');
    } catch {
      res.status(500).send('Erro ao atualizar turma');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Turma WHERE id_turma = $1', [req.params.id]);
      res.send('Turma deletada');
    } catch {
      res.status(500).send('Erro ao deletar turma');
    }
  });

  return router;
};
