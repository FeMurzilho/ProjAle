const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'docker',
  port: 5432,
});

// Rotas
const alunoRouter = require('./routes/aluno')(pool);
const professorRouter = require('./routes/professores')(pool);
const turmaRouter = require('./routes/turmas')(pool);
const presencaRouter = require('./routes/presenca')(pool);
const atividadeRouter = require('./routes/atividades')(pool);
const atividadeAlunoRouter = require('./routes/atividadesalunos')(pool);
const pagamentoRouter = require('./routes/pagamento')(pool);
const usuarioRouter = require('./routes/usuario')(pool);

app.use('/aluno', alunoRouter);
app.use('/professor', professorRouter);
app.use('/turma', turmaRouter);
app.use('/presenca', presencaRouter);
app.use('/atividade', atividadeRouter);
app.use('/atividade-aluno', atividadeAlunoRouter);
app.use('/pagamento', pagamentoRouter);
app.use('/usuario', usuarioRouter);

// Servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
