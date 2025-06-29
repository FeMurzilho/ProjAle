# Sistema de Gerenciamento Escolar - Backend

Este projeto foi desenvolvido como parte da avaliação da disciplina de Implementação de Software do 5º semestre. O objetivo é configurar e executar um ambiente completo com backend em Node.js e banco de dados PostgreSQL, usando Docker e Docker Compose.

## Sobre o projeto

A aplicação simula o backend de um sistema de gestão para uma escola infantil. Ela permite operações básicas (GET, POST e PUT) sobre alunos, com toda a infraestrutura executando em containers. O backend e o banco de dados estão integrados via Docker Compose.

## Tecnologias utilizadas

- Node.js com Express
- PostgreSQL
- Docker e Docker Compose
- Insomnia (para testes de API)

## Como configurar e executar o ambiente Docker

### 1. Clonando o repositório

Abra o terminal e execute:

```
git clone https://github.com/FeMurzilho/ProjAle.git
cd ProjAle/ProjetoGerencEscolar/Gerenciamento\ Escolar
```

### 2. Subindo os containers

Execute o comando:

```
docker-compose up -d --build
```

Esse comando vai construir a imagem do backend e iniciar os containers do Node.js e do PostgreSQL.

### 3. Acessando a API

Depois de subir os containers, a API estará disponível em:

```
http://localhost:3000/alunos
```

Você pode utilizar o navegador, Insomnia ou Postman para testar os endpoints.

## Endpoints disponíveis

- `GET /alunos` – Lista todos os alunos cadastrados.
- `POST /alunos` – Cadastra um novo aluno.
  Exemplo de corpo (JSON):
  ```json
  {
    "nome": "Fulano de Tal",
    "idade": 9
  }
  ```

- `PUT /alunos/:id` – Atualiza um aluno pelo ID.
  Exemplo de corpo:
  ```json
  {
    "nome": "Novo Nome",
    "idade": 10
  }
  ```

## Estrutura do projeto

```
backend/
├─ index.js
├─ package.json
BD/
├─ init.sql
docker-compose.yml
Dockerfile
README.md
```

## Observações

- A pasta node_modules é ignorada no versionamento pelo arquivo .gitignore.
- O banco é acessado via serviço "db" no Docker Compose.
- Os testes da API foram realizados com o Insomnia.
- O script init.sql pode ser usado para criar a tabela aluno automaticamente na primeira execução.

## Autor

Felipe Murzilho  
Aluno do 5º semestre de Análise e Desenvolvimento de Sistemas  
GitHub: https://github.com/FeMurzilho
