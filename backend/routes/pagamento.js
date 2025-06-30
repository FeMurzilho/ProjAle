const express = require('express');
module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Pagamento');
      res.json(result.rows);
    } catch (err) {
      res.status(500).send('Erro ao buscar pagamentos');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Pagamento WHERE id_pagamento = $1', [req.params.id]);
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).send('Erro ao buscar pagamento');
    }
  });

  router.post('/', async (req, res) => {
    const { id_aluno, data_pagamento, valor_pago, forma_pagamento, referencia, status } = req.body;
    try {
      await pool.query('INSERT INTO Pagamento (id_aluno, data_pagamento, valor_pago, forma_pagamento, referencia, status) VALUES ($1, $2, $3, $4, $5, $6)', [id_aluno, data_pagamento, valor_pago, forma_pagamento, referencia, status]);
      res.status(201).send('Pagamento criado');
    } catch (err) {
      res.status(500).send('Erro ao criar pagamento');
    }
  });

  router.put('/:id', async (req, res) => {
    const { id_aluno, data_pagamento, valor_pago, forma_pagamento, referencia, status } = req.body;
    try {
      await pool.query('UPDATE Pagamento SET id_aluno = $1, data_pagamento = $2, valor_pago = $3, forma_pagamento = $4, referencia = $5, status = $6 WHERE id_pagamento = $7', [id_aluno, data_pagamento, valor_pago, forma_pagamento, referencia, status, req.params.id]);
      res.send('Pagamento atualizado');
    } catch (err) {
      res.status(500).send('Erro ao atualizar pagamento');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM Pagamento WHERE id_pagamento = $1', [req.params.id]);
      res.send('Pagamento deletado');
    } catch (err) {
      res.status(500).send('Erro ao deletar pagamento');
    }
  });

  return router;
};
