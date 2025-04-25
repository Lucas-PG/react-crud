# Aplicação CRUD

Um simples website com operações de CRUD sob um banco de dados.

Abaixo está uma explicação detalhada do projeto. Para ver apenas como executá-lo, veja a seção [executando](#executando).

## Requisitos

O website deve ter:

- No mínimo 3 páginas:
  - Listagem dos dados;
  - Cadastro, edição e exclusão de items;
  - Vizualização detalhada de um item;
- Comunicação com API.
- Tratamento de erros com mensagens ao usuário.
- Operações _CRUD_ via endpoints RESTful.
- Implementação de validação de novos dados recebidos.

## Estrutura do repositório

O projeto tem a seguinte estrutura de diretórios:

```bash
.
├── backend # API, insere os dados de um banco de dados no localhost
│   ├── Controllers # Funções para operações CRUD
│   └── Routes # Rotas que recebem as requisições
├── public # Pasta pública, contém as imagens e gifs
├── sql # Código sql e csv fonte
└── src
    ├── api # Comunicação com a API
    ├── components # Componentes que podem ser usados por mais de uma página
    ├── hooks # Hooks que podem ser compartilhados pela aplicação
    ├── pages # Páginas
    └── styles # Arquivos CSS
```

Seguindo vagamente [esta estrutura](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

## Fonte dos Dados

Para os dados, eu usei [este arquivo](https://github.com/benoitvallon/100-best-books/blob/master/books.csv). Cortei alguns campos e transformei alguns dos livros em SQL. O código SQL está [aqui](./sql/books.sql).

## Executando

1. O primeiro passo é criar o banco de dados. Para isso, utilize o [script sql](./sql/books.sql)
2. Depois, configure as [variáveis de conexão](./backend/db.js)
3. Por último, execute a aplicação:

   Por questão de facilidade, eu inclui um _script_ `dev` neste repositório que deve fazer tudo automáticamente. Clone o repositório:

   ```bash
   git clone https://github.com/Lucas-PG/react-crud.git
   cd react-crud
   ```

   E, na raiz do repositório, execute:

   ```bash
   npm run dev
   ```

   Apenas isto deve iniciar a aplicação no [localhost:3000](http://localhost:3000)

   Mas, caso haja algum erro, é possível fazer manualmente:

   ```bash
   cd backend
   npm install
   npm start # começa a API
   cd ..
   npm install
   npm start # começa o website
   ```
