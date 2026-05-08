# 📦 API de Entregas de Encomendas

Uma API REST robusta para cadastro de usuários e gerenciamento de pedidos de entrega, desenvolvida com **TypeScript**, **Express**, **Prisma ORM** e **PostgreSQL**, com autenticação via **JWT** e banco de dados containerizado com **Docker**.

## 📋 Sobre o Projeto

A **API de Entregas de Encomendas** é um back-end completo para gerenciar usuários e seus pedidos de produtos. Conta com autenticação segura via JWT, senhas criptografadas com Bcrypt, validação de dados com Zod e persistência em banco de dados PostgreSQL via Prisma ORM. O ambiente de banco de dados é provisionado facilmente com Docker Compose.

## ✨ Funcionalidades

- 👤 Cadastro e autenticação de usuários
- 🔐 Autenticação segura com **JWT** (JSON Web Token)
- 🔒 Hash de senhas com **Bcrypt**
- 📋 Gerenciamento de pedidos de entrega
- ✅ Validação de dados de entrada com **Zod**
- 🗄️ Persistência de dados com **PostgreSQL** via **Prisma ORM**
- 🐳 Banco de dados containerizado com **Docker Compose**
- ⚡ Hot reload em desenvolvimento com **tsx**

## 🛠️ Tecnologias Utilizadas

**Runtime & Linguagem**
- [Node.js](https://nodejs.org/) >= 18
- [TypeScript](https://www.typescriptlang.org/)

**Framework & Bibliotecas**
- [Express](https://expressjs.com/) — framework HTTP
- [express-async-errors](https://www.npmjs.com/package/express-async-errors) — tratamento de erros assíncronos
- [Prisma ORM](https://www.prisma.io/) — acesso e migrations do banco de dados
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) — geração e verificação de tokens JWT
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) — criptografia de senhas
- [Zod](https://zod.dev/) — validação e tipagem de schemas

**Banco de Dados & Infra**
- [PostgreSQL](https://www.postgresql.org/) — banco de dados relacional
- [Docker & Docker Compose](https://www.docker.com/) — containerização do banco de dados

**Build & Dev**
- [tsx](https://github.com/privatenumber/tsx) — execução e hot reload em TypeScript
- [tsup](https://tsup.egoist.dev/) — build para produção

## 📁 Estrutura do Projeto

```
Api_Entregas_Encomendas/
├── prisma/
│   └── schema.prisma       # Modelos e configuração do banco de dados
├── src/
│   └── server.ts           # Ponto de entrada da aplicação
├── .env-example            # Exemplo de variáveis de ambiente
├── .gitignore
├── docker-compose.yml      # Configuração do container PostgreSQL
├── package.json
├── tsconfig.json
└── .vscode/                # Configurações do editor
```

## ⚙️ Variáveis de Ambiente

Copie o arquivo `.env-example` para `.env` e preencha as variáveis:

```env
DATABASE_URL=    # URL de conexão com o PostgreSQL (ex: postgresql://postgres:postgres@localhost:5432/api_entrega_encomendas)
JWT_SECRET=      # Chave secreta para assinar os tokens JWT
PORT=            # Porta em que a API irá rodar (ex: 3000)
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [Docker](https://www.docker.com/) e Docker Compose

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Luiz-Miguel-Pimenta/Api_Entregas_Encomendas.git
   cd Api_Entregas_Encomendas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env-example .env
   # Edite o arquivo .env com suas configurações
   ```

4. Suba o banco de dados com Docker:
   ```bash
   docker compose up -d
   ```

5. Execute as migrations do Prisma:
   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor em modo desenvolvimento:
   ```bash
   npm run dev
   ```

### Build para Produção

```bash
npm run build
npm start
```

## 🐳 Configuração do Docker

O `docker-compose.yml` sobe um container PostgreSQL com as seguintes configurações padrão:

| Variável | Valor |
|----------|-------|
| Usuário | `postgres` |
| Senha | `postgres` |
| Banco | `api_entrega_encomendas` |
| Porta | `5432` |

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia em modo desenvolvimento com hot reload |
| `npm run build` | Compila o projeto para a pasta `build/` |
| `npm start` | Inicia o servidor a partir do build compilado |

## 👤 Autor

**Luiz Miguel Nunes Pimenta**

- GitHub: [@Luiz-Miguel-Pimenta](https://github.com/Luiz-Miguel-Pimenta)
