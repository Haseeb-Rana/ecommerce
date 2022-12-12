![](http://imgur.com/t3teAxi.png)
###  A simple RESTful API for e-Commerce



## Features

<b>Auth Features</b>

| Feature  |  Coded?       | Description  |
|----------|:-------------:|:-------------|
| Login user | &#10004; | Let a previously registered user log in (e.g. retrieve authentication token) |
| Signup user | &#10004; | Register a user (accept username, password, type of user - buyer/seller) |

<b>Buyer Features</b>

| Feature  |  Coded?       | Description  |
|----------|:-------------:|:-------------|
| List sellers | &#10004; | Get a list of all sellers |
| Get seller catalog | &#10004; | Get the catalog of a seller by seller_id |
| Create order | &#10004; | Send a list of items to create an order for seller with id = seller_id |

<b>Seller Features</b>

| Feature  |  Coded?       | Description  |
|----------|:-------------:|:-------------|
| Create a catalog | &#10004; | Send a list of items to create a catalog for a seller |
| List orders | &#10004; | Retrieve the list of orders received by a seller |

# eCommerce

**eCommerce** it's an open source (test scenario) software made to create a easy and simple "Shop" API, where you have Module  services, one the **Seller API** that stores and handles everything Related to Stock and Products. And the **Buyer API** where you can create orders (cart's) and checkout items.

The purpose of this repository it's for education and test. But the code it's being coded in a proper way.

## Documentation

**eCommerce** has a full API documentation made with [Swagger](https://swagger.io).


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

##  Documentation

```bash
# Generate documentation
$ npm run doc:serve

```

**[View documentation](http://127.0.0.1:8080).**


### Notes

**Note.:** Install mongodb.

**Note.:** Set following environment variables
* **MONGO_URI:** SET HERE



**Note.:** By default `api` runs on port 3000.