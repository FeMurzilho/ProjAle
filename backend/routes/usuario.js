const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Usuario');
      res.json(result.rows);
    } catch (err) {
      res.status(500).send('Erro ao buscar usuários');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Usuario WHERE id_usuario = $1', [req.params.id]);
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).send('Erro ao buscar usuário');
    }
  });

  router.post('/', async (req, res) => {
    const { login, senha, nivel_acesso, id_professor } = req.body;
    try {
      await pool.query('INSERT INTO Usuario (login, senha, nivel_acesso, id_professor) VALUES ($1, $2, $3, $4)', [login, senha, nivel_acesso, id_professor]);
      res.status(201).send('Usuário criado');
    } catch (err) {
      res.status(500).send('Erro ao criar usuário');
    }
  });

  router.put('/:id', async (req, res) => {
    const { login, senha, nivel_acesso, id_professor } = req.body;
    try {
      await pool.query('UPDATE Usuario SET login = $1, senha = $2, nivel_acesso = $3, id_professor = $4 WHERE id_usuario = $5', [login, senha, nivel_acesso, id_professor, req.params.id]);
      res.send('Usuário atualizado');
    } catch (err) {
      res.status(500).send('Erro ao atualizar usuário');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Usuario WHERE id_usuario = $1', [req.params.id]);
      res.send('Usuário deletado');
    } catch (err) {
      res.status(500).send('Erro ao deletar usuário');
    }
  });

  return router;
};
