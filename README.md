# Seja bem vindo ao projeto blitz de carreira!.

### Este projeto tem como finalidade simular um desáfio técnico real, para uma entrevista de emprego!.

#### Neste projeto o que será feito é uma `to-do-list`, utilizando tanto o *Backend* quanto o *Frontend* !.

### Técnologias utilizadas.

- Javascript
- Node Js
- React js
- Express
- Mysql
- Insomnia
- Testes unitários

### Para iniciar o projeto.
- Clone o repositório `git@github.com:brucealberto/BlitzCarreira.git`.

### Iniciando Backend.

1. Entre na pasta `cd backend`.
2. Versão do Node 16.
2. Instale as dependências com o comando `npm install`.
3. Inicie o servicço com o comando `npm run dev`.
4. Para testar a aplicação utilize o comando `npm test`.

### Iniciar o Mysql via docker
- $ docker run --name some-mysql -p 3306:3306 -e MYSQL_PASSWORD=password -e MYSQL_USER=root -d mysql:5.7
- $ docker container start some-mysql
- no mysql workbench Username=root password=password
> Observação : o banco está vazio, insira dados utilizando a rota post do backend.

### Iniciando Frontend.

1. Entre na pasta `cd frontend`.
2. Instale as dependências com o comando `npm install`.
3. Inicie o servicço com o comando `npm start`.

### Implementações futuras.
> Gerar token para as autenticações.

> Finalizar os testes.

> Terminar o frontend.
