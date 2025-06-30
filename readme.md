# 🎓 API Sistema Escolar - ProjAle

Sistema completo de gestão escolar com 8 APIs REST desenvolvidas em Node.js, Express e PostgreSQL.

## 🚀 Tecnologias

- **Backend:** Node.js + Express
- **Banco:** PostgreSQL
- **Container:** Docker + Docker Compose
- **Testes:** Insomnia (coleção incluída)

## 📋 APIs Disponíveis

### 🎓 **Aluno** - `/aluno`
- GET `/aluno` - Lista todos os alunos
- GET `/aluno/:id` - Busca aluno por ID
- POST `/aluno` - Cria novo aluno
- PUT `/aluno/:id` - Atualiza aluno
- DELETE `/aluno/:id` - Remove aluno

### 👨‍🏫 **Professor** - `/professor`
- GET `/professor` - Lista todos os professores
- GET `/professor/:id` - Busca professor por ID
- POST `/professor` - Cria novo professor
- PUT `/professor/:id` - Atualiza professor
- DELETE `/professor/:id` - Remove professor

### 🏫 **Turma** - `/turma`
- GET `/turma` - Lista todas as turmas
- GET `/turma/:id` - Busca turma por ID
- POST `/turma` - Cria nova turma
- PUT `/turma/:id` - Atualiza turma
- DELETE `/turma/:id` - Remove turma

### ✅ **Presença** - `/presenca`
- GET `/presenca` - Lista todas as presenças
- GET `/presenca/:id` - Busca presença por ID
- POST `/presenca` - Registra presença
- PUT `/presenca/:id` - Atualiza presença
- DELETE `/presenca/:id` - Remove presença

### 📝 **Atividade** - `/atividade`
- GET `/atividade` - Lista todas as atividades
- GET `/atividade/:id` - Busca atividade por ID
- POST `/atividade` - Cria nova atividade
- PUT `/atividade/:id` - Atualiza atividade
- DELETE `/atividade/:id` - Remove atividade

### 🔗 **Atividade-Aluno** - `/atividade-aluno`
- GET `/atividade-aluno` - Lista relações atividade-aluno
- POST `/atividade-aluno` - Cria relação atividade-aluno
- DELETE `/atividade-aluno/:id_atividade/:id_aluno` - Remove relação

### 💰 **Pagamento** - `/pagamento`
- GET `/pagamento` - Lista todos os pagamentos
- GET `/pagamento/:id` - Busca pagamento por ID
- POST `/pagamento` - Registra pagamento
- PUT `/pagamento/:id` - Atualiza pagamento
- DELETE `/pagamento/:id` - Remove pagamento

### 👤 **Usuário** - `/usuario`
- GET `/usuario` - Lista todos os usuários
- GET `/usuario/:id` - Busca usuário por ID
- POST `/usuario` - Cria novo usuário
- PUT `/usuario/:id` - Atualiza usuário
- DELETE `/usuario/:id` - Remove usuário

## 🛠️ Como Executar

### Pré-requisitos
- Docker
- Docker Compose

### Executar
```bash
# Clone o repositório
git clone https://github.com/FeMurzilho/ProjAle.git
cd ProjAle

# Inicie os containers
docker-compose up -d

# A API estará disponível em http://localhost:3000
```

## 🧪 Testando as APIs

### Insomnia
1. Importe o arquivo `insomnia_todas_rotas_completo.json`
2. Todas as 37 requisições estarão organizadas por pastas
3. Exemplos de JSON incluídos para cada endpoint

### Exemplos de JSON

**Aluno:**
```json
{
  "nome": "João Silva",
  "endereco": "Rua das Flores, 123",
  "cidade": "São Paulo",
  "estado": "SP",
  "cep": "01010-000",
  "pais": "Brasil",
  "telefone": "(11) 91234-5678"
}
```

**Professor:**
```json
{
  "nome_completo": "Maria Oliveira",
  "email": "maria@escola.com",
  "telefone": "(11) 99999-9999"
}
```

**Pagamento:**
```json
{
  "id_aluno": 1,
  "data_pagamento": "2024-12-19",
  "valor_pago": 150.00,
  "forma_pagamento": "PIX",
  "referencia": "Mensalidade Dezembro",
  "status": "Pago"
}
```

## 📊 Estrutura do Banco

- **Alunos** - Dados pessoais dos alunos
- **Professor** - Informações dos professores
- **Turma** - Turmas e horários
- **Presenca** - Controle de frequência
- **Atividade** - Atividades e avaliações
- **Atividade_Aluno** - Relação N:N entre atividades e alunos
- **Pagamento** - Controle financeiro
- **Usuario** - Sistema de login

## 🔧 Desenvolvimento

### Estrutura do Projeto
```
ProjAle/
├── backend/
│   ├── routes/          # Rotas das APIs
│   ├── index.js         # Servidor principal
│   └── package.json     # Dependências
├── BD/                  # Scripts do banco
├── docker-compose.yml   # Configuração Docker
└── insomnia_*.json     # Coleções de teste
```

### Tecnologias Utilizadas
- **Express.js** - Framework web
- **pg** - Driver PostgreSQL
- **cors** - Middleware CORS
- **Docker** - Containerização

## 📝 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido por Felipe Murzilho** 🚀