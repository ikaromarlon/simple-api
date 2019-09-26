# simple-api

A simple API built with Node.js, Express and MongoDB

---

### Configurando a API

Instale as dependências
``` bash
$ npm install
```

Crie um arquivo `.env` na raíz do projeto se baseando no arquivo `.env.example`
``` bash
$ cp .env.example .env
```

Edite o arquivo `.env` com as configurações da sua base de dados MongoDB
``` bash
$ vim .env
```

### Utilização

Executar o serviço da API em modo daemon
``` bash
$ npm run dev
```

Executar testes
``` bash
$ npm run test
```

Executar linter
``` bash
$ npm run lint
```

### Requisições:

- `POST /sign-up`: registra novo usuário
``` bash
curl -X POST \
  http://localhost:3000/sign-up \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "Maria Silva",
	"email": "maria@gmail.com",
	"password": "123456",
	"phones": [
		{
			"areaCode": "11",
			"number": "32324455"
		}
	]
}'
```

<br>

- `POST /sign-in`: realiza autenticação com um usuário existente
``` bash
curl -X POST \
  http://localhost:3000/sign-in \
  -H 'Content-Type: application/json' \
  -d '{
	"email": "maria@gmail.com",
	"password": "123456"
}'
```

<br>

- `GET /users`: obtém lista de todos os usuários
``` bash
curl -X GET \
  http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <token>'
```

<br>

- `GET /users/<id>`: obtém um usuário específico
``` bash
curl -X GET \
  http://localhost:3000/users/<id> \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <token>'
```