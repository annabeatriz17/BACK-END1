## FILMES

- Mufasa: O Rei Leão;
- Divertida Mente 2.

Esta é uma API que permite gerenciar filmes, sendo possível adicionar, atualizar e deletar filmes.

## Rotas

### Obter Todos os Filmes

- **Método:** `GET`;
-  **Endpoint:** `/movies`;

### Adicionar um Novo Filme
- **Método:** POST;
- **Endpoint:** /movies;
- **Parâmetros:** title, director, duration, plays.

### Atualizar um Filme
- **Método:** PUT;
- **Endpoint:** /movies/:id;
- **Parâmetros:** id, updateData

### Deletar um Filme
- **Método:** DELETE;
- **Endpoint:** /movies/:id;
- **Parâmetros:** id.

### Obter os 10 Melhores Filmes
- **Método:** GET;
- **Endpoint:** /movies/top10;

### Obter um Filme pelo ID
- **Método:** GET;
- **Endpoint:** /movies/:id
- **Parâmetros: id.
