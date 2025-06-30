const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Atividade_Aluno');
      res.json(result.rows);
    } catch (err) {
      res.status(500).send('Erro ao buscar atividades-alunos');
    }
  });

  router.post('/', async (req, res) => {
    const { id_atividade, id_aluno } = req.body;
    try {
      await pool.query('INSERT INTO Atividade_Aluno (id_atividade, id_aluno) VALUES ($1, $2)', [id_atividade, id_aluno]);
      res.status(201).send('Atividade-aluno criada');
    } catch (err) {
      res.status(500).send('Erro ao criar atividade-aluno');
    }
  });

  router.delete('/:id_atividade/:id_aluno', async (req, res) => {
    try {
      await pool.query('DELETE FROM Atividade_Aluno WHERE id_atividade = $1 AND id_aluno = $2', [req.params.id_atividade, req.params.id_aluno]);
      res.send('Atividade-aluno deletada');
    } catch (err) {
      res.status(500).send('Erro ao deletar atividade-aluno');
    }
  });

  return router;
};
