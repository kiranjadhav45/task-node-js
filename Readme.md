### API Documentation

This document provides information about the endpoints available in the API.

---

#### Get Products

Retrieve a list of products.

- **URL**

  `/api/v1/products`

- **Method**

  `GET`

- **Parameters**

  - `page`: Page number (default: 1)
  - `pageSize`: Number of items per page (default: 10)

- **Sample Request**

  ```http
  GET http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10
  ```

#### POST Products

create products.

- **URL**

  `/api/v1/products/create`

- **Method**

  `POST`

- **body Form Data**

  - `name`: Product name
  - `price`: Product price
  - `description`: Product description
  - `image`: Image file (type: file)

- **Sample Request**

  ```http
  POST http://139.59.25.193:9001/api/v1/products/create
  ```

#### Get Products

Update an existing product.

- **URL**

  `/api/v1/products/update/:id`

- **Method**

  `PUT`

- **body json data**

  - `name`: Product name
  - `price`: Product price
  - `description`: Product description

- **Sample Request**

  ```http
  PUT http://139.59.25.193:9001/api/v1/products/update/123
  ```
