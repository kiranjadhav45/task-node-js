Get Products
Retrieve a list of products.

URL

/api/v1/products

Method

GET

Parameters

page: Page number (default: 1)
pageSize: Number of items per page (default: 10)

Sample Request

GET http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10

Create Product
Create a new product.

URL

/api/v1/products/create

Method

POST

Form Data

name: Product name
price: Product price
description: Product description
image: Image file (type: file)

Sample Request

POST http://139.59.25.193:9001/api/v1/products/create
Content-Type: multipart/form-data

name=SampleProduct&price=10&description=SampleDescription&image=file

Update Product
Update an existing product.

URL

/api/v1/products/update/:id

Method

PUT

JSON Data Body

name: Product name
price: Product price
description: Product description

Sample Request

PUT http://139.59.25.193:9001/api/v1/products/update/123
Content-Type: application/json

{
"name": "UpdatedProduct",
"price": 15,
"description": "UpdatedDescription"
}

API Documentation
This document provides information about the endpoints available in the API.

Get Products
Retrieve a list of products.

URL

/api/v1/products

Method

GET

Parameters

page: Page number (default: 1)
pageSize: Number of items per page (default: 10)
Sample Request

http
Copy code
GET http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10
Create Product
Create a new product.

URL

/api/v1/products/create

Method

POST

Form Data

name: Product name
price: Product price
description: Product description
image: Image file (type: file)
Sample Request

http
Copy code
POST http://139.59.25.193:9001/api/v1/products/create
Content-Type: multipart/form-data

name=SampleProduct&price=10&description=SampleDescription&image=[image file]
Update Product
Update an existing product.

URL

/api/v1/products/update/:id

Method

PUT

JSON Data Body

name: Product name
price: Product price
description: Product description
Sample Request

http
Copy code
PUT http://139.59.25.193:9001/api/v1/products/update/123
Content-Type: application/json

{
"name": "UpdatedProduct",
"price": 15,
"description": "UpdatedDescription"
}
Delete Product
Delete an existing product.

URL

/api/v1/products/delete/:id

Method

DELETE

Sample Request

DELETE http://139.59.25.193:9001/api/v1/products/delete/123
