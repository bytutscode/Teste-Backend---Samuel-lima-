# Teste-Backend -Samuel-lima-

## A simple CRUD USING TYPESCRIPT AND NODEJS

## Requerimentos
Para rodar esse projeto na sua máquina, você vai precisar de:
- Ter o NODEJS instalado na sua máquina ( para baixar as dependências e iniciar o projeto) caso não tenha : [Site do nodejs](https://nodejs.org/)
- Ter o GIT instalado na sua máquina ( para clonar o repositorio ) caso não tenha : [Site do GIT](https://git-scm.com/)
- Ter um banco de dados POSTGRES instalado

## Instalando
```
git clone https://github.com/bytutscode/Teste-Backend---Samuel-lima-
```
```
cd Teste-Backend---Samuel-lima-
```
```
npm install
```

## Criando banco de dados postgres
    - Tem um arquivo de configuração do banco de dados em src/database chamado "schema.sql"
    - rode via query no seu banco de dados o primeiro comando para a criação do banco de dados
    - entre na query do banco de dados criado
    - agora rode os comandos para criar as tabelas "products" e "municipalities" no nosso banco de dados


## Inicializando o projeto 
```
npm dev
```
## Funcionalidades
### Recursos
- CRUD de produtos

## Endpoits
```javascript
GET '/products'
GET '/products/:id'
POST '/products'
PUT '/products/:id'
DEL '/products/:id'


GET '/municipios'
```



## como usar 

- Para usar localmente após iniciar o projeto e fazer uma requisição para http://localhost:4000/products



### GET '/products'
### exemplo de resposta
```json
[
    {
        "id": 3,
        "name": "bola2",
        "category": "brinquedos",
        "status": "ACTIVE",
        "quantity": 50,
        "createdAt": "2023-12-26T15:55:12.598Z",
        "updatedAt": "2023-12-26T15:55:12.598Z",
        "deletedAt": null
    }
]
```

### GET '/products/:3'
### exemplo de resposta
```json
    {
        "id": 3,
        "name": "bola2",
        "category": "brinquedos",
        "status": "ACTIVE",
        "quantity": 50,
        "createdAt": "2023-12-26T15:55:12.598Z",
        "updatedAt": "2023-12-26T15:55:12.598Z",
        "deletedAt": null
    }
```

