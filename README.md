# Desafio: Proxy Reverso com Nginx, Node.js e MySQL

Este repositório contém a solução para o desafio proposto no curso de desenvolvimento de software. O desafio envolve a criação de uma aplicação Node.js que interage com um banco de dados MySQL através de um proxy reverso Nginx.

## Descrição do Desafio

Quando um usuário acessa o Nginx, o mesmo faz uma chamada para a nossa aplicação Node.js. Esta aplicação adiciona um registro no nosso banco de dados MySQL, cadastrando um nome na tabela people.

O retorno da aplicação Node.js para o Nginx é:

```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

## Como rodar a aplicação

Para rodar a aplicação, você precisa ter o Docker instalado na sua máquina. Depois de instalado, basta rodar o seguinte comando na raiz do projeto:

`docker-compose up -d`

Após rodar este comando, a aplicação estará disponível na porta 8080.

## Linguagem de Programação

A linguagem de programação utilizada para este desafio é Node/JavaScript.

## Entrega

Todo o código está disponível neste repositório. Sinta-se à vontade para clonar, modificar e usar da maneira que achar melhor.

Espero que gostem da solução! 😊
