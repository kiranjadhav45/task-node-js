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

#### update Products

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

#### Delete Products

Delete an existing product.

- **URL**

  `/api/v1/products/delete/:id`

- **Method**

  `DELETE`

- **Sample Request**

  ```http
  DELETE http://139.59.25.193:9001/api/v1/products/delete/123

  ```

## Note

This project might not run locally due to the dependency on Cloudinary credentials. However, it has been deployed on digital ocean, and you can access it using the provided URL. The deployed version works the same as if you had added credentials locally.

<!-- Deployment URL: [http://139.59.25.193:9001](http://139.59.25.193:9001)
Deployment URL Sample : [http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10](http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10) -->

Deployment URL: [http://139.59.25.193:9001](http://139.59.25.193:9001)  
Deployment URL Sample : [http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10](http://139.59.25.193:9001/api/v1/products?page=1&pageSize=10)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/kiranjadhav45/task-node-js.git
   ```

2. go to the project directory:

   ```bash
    cd task-node-js
   ```

3. install pakages:

   ```bash
   npm install
   ```

4. start dev server:
   ```bash
   npm run dev
   ```
