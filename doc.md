# Rotas e seus dados esperados e retornados

### Post `/sales`

## Entrada

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