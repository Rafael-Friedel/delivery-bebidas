# Rotas e seus dados esperados e retornados

## `/sales`

### Post `/`

#### Entrada:

```json
  "userId": 3,
  "sellerId": 2,
  "totalPrice": 66,
  "deliveryAddress": "rua dos bobos",
  "deliveryNumber": 1,
  "products": [
    { "productId":1, "quantity": 20 },
    { "productId": 2, "quantity": 5 }
  ]
```

#### Saída:
```json
{
	"saleDate": "2022-09-26T19:41:22.743Z",
	"id": 9,
	"userId": 4,
	"sellerId": 2,
	"totalPrice": 66,
	"deliveryAddress": "Geremias de Santo Cristo",
	"deliveryNumber": 540,
	"status": "Pendente"
}
```
### Get `/:id`
> Este ID é referente à venda

#### Saída:

```json 
{
	"id": 1,
	"userId": 3,
	"sellerId": 2,
	"totalPrice": "66",
	"deliveryAddress": "rua dos bobos",
	"deliveryNumber": "1",
	"saleDate": "2022-09-10",
	"status": "em progresso",
	"user": {
		"id": 3,
		"name": "Cliente Zé Birita",
		"role": "customer",
		"email": "zebirita@email.com"
	},
	"Products": [
		{
			"id": 1,
			"name": "Skol Lata 250ml",
			"price": "2.20",
			"urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
			"SalesProduct": {
				"quantity": 30
			}
		},
		{
			"id": 3,
			"name": "Antarctica Pilsen 300ml",
			"price": "2.49",
			"urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
			"SalesProduct": {
				"quantity": 54
			}
		}
	]
}
```
### Get `/orders/:sellerId`

#### Saída:

```json 
[
	{
		"id": 1,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "66",
		"deliveryAddress": "rua dos bobos",
		"deliveryNumber": "1",
		"saleDate": "2022-09-10",
		"status": "em progresso"
	},
	{
		"id": 2,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "30",
		"deliveryAddress": "rua das Acácias",
		"deliveryNumber": "2",
		"saleDate": "2022-09-19",
		"status": "em progresso"
	},
	{
		"id": 3,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "134",
		"deliveryAddress": "rua dos lamentos",
		"deliveryNumber": "3",
		"saleDate": "2022-09-20",
		"status": "em progresso"
	}
]
```

## `/login`

### POST `/`

#### Entrada:
```json
{
  "email": "algumacoisa@outracoisa.com",
  "password": "stringCom6Caracteres"
}
```
#### Saída:
```json
{
	"id": 4,
	"name": "Carlos Moura",
	"role": "customer",
	"email": "carlos@carlos.com",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiY2FybG9zQGNhcmxvcy5jb20iLCJpYXQiOjE2NjQyMjE4NjB9.p3temrrCfsNAFpcdrCq9syWbYn9CQorYYyRLHp_Sl1w"
}
```

## `/register`

### Post `/`

#### Entrada
```json
{
	"name": "nomeCom12Caracteres",
	"email": "algumacoisa@outracoisa.com",
	"password": "123456"
}
```
#### Saída
```json
{
	"id": 4,
	"name": "Carlos Moura",
	"role": "customer",
	"email": "carlos@carlos.com",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiam9zZUBjYXJsb3MuY29tIiwiaWF0IjoxNjY0MjIyMDE4fQ.HCQYmfQSvjDJIYrWIIXs0_ETemkbqALuM2IoTSpsG24"
}
```

## `/products`

### GET `/`

#### Saída
``` json
[
	{
		"id": 1,
		"name": "Skol Lata 250ml",
		"price": "2.20",
		"urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
	},
	{
		"id": 2,
		"name": "Heineken 600ml",
		"price": "7.50",
		"urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
	}, 
  {
    "..."
  }
]
```

## `/users`

### `/`

#### Saída
``` json
[
	{
		"id": 1,
		"name": "Delivery App Admin",
		"role": "administrator",
		"email": "adm@deliveryapp.com"
	},
	{
		"id": 2,
		"name": "Fulana Pereira",
		"role": "seller",
		"email": "fulana@deliveryapp.com"
	},
	{
		"id": 3,
		"name": "Cliente Zé Birita",
		"role": "customer",
		"email": "zebirita@email.com"
	}	
]
```

### `/sellers`

#### Saída
``` json
[
	{
		"id": 2,
		"name": "Fulana Pereira",
		"role": "seller",
		"email": "fulana@deliveryapp.com"
	}
]
```

### `/customers`

#### Saída
``` json
[
	{
		"id": 3,
		"name": "Cliente Zé Birita",
		"role": "customer",
		"email": "zebirita@email.com"
	}
]

```

### `/customers/orders`
> Neste endpoint é necessário passar o id do cliente no corpo da requisição.

#### Entrada
``` json
{
  "userId": 3
}
```

#### Saída
``` json
[
	{
		"id": 1,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "66",
		"deliveryAddress": "rua dos bobos",
		"deliveryNumber": "1",
		"saleDate": "2022-09-10",
		"status": "em progresso"
	},
	{
		"id": 2,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "30",
		"deliveryAddress": "rua das Acácias",
		"deliveryNumber": "2",
		"saleDate": "2022-09-19",
		"status": "em progresso"
	},
	{
		"id": 3,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "134",
		"deliveryAddress": "rua dos lamentos",
		"deliveryNumber": "3",
		"saleDate": "2022-09-20",
		"status": "em progresso"
	}
]
```