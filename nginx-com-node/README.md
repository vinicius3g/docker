## Desafio Nginx com nodejs
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 

### Objetivo
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

- **``<h1>Full Cycle Rocks!</h1>``**
- **``Lista de nomes cadastrada no banco de dados.``**

### Para rodar o compose

```bash
docker compose up --build
```