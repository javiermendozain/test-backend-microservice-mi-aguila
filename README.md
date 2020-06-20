<p align="center">
  <img src="https://raw.githubusercontent.com/javiermendozain/test-backend-microservice-mi-aguila/master/header-mi-aguila.png" alt="Logo" width="300" height="auto" />
</p>

<p align="center">
		<a href="https://david-dm.org/javiermendozain/test-backend-microservice-mi-aguila"><img alt="Dependencies" src="https://img.shields.io/david/javiermendozain/test-backend-microservice-mi-aguila.svg" height="20"/></a>
<a href="https://github.com/javiermendozain/test-backend-microservice-mi-aguila/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/javiermendozain/test-backend-microservice-mi-aguila.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Test for backend dev on mi agula</b></br>
  <sub><sub>
</p>

<br />

Welcome to test-backend-microservice-mi-aguila.
Enjoy code 💪

<!-- Content Table -->

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ⭑ Table of Contents

- [⭑ Getting Started](#-getting-started)
- [⭑ Technologies used](#-technologies-used)
- [⭑ Requirements](#-requirements)
- [⭑ Run](#-run)
- [⭑ Flow architecture (API RESTful)](#-flow-architecture-api-restful)
- [⭑ Migration](#-migration)
- [⭑ Run Unit Test with Jest](#-run-unit-test-with-jest)
- [⭑ All commands](#-all-commands)
- [⭑ License](#-license)
- [⭑ Dependencies](#-dependencies)

<!-- Getting started  -->

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#getting-started)

## ⭑ Getting Started

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#technologies-used)

## ⭑ Technologies used

This project was build using:

- Node.js ( express )
- MongoDb ( mongosee as ODM )
- GitFlow
- Unit Testing ( Jest )
- Swagger ( Docs )
- Appnest/readme (Pretty readme 👌)
- N-layers ( Model as design patterns )
- Docker compose

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#requirements)

## ⭑ Requirements

To run this project you must have the requirements installed on your machine.

- [ Docker ](https://docs.docker.com/get-docker/)
- [Docker compose](https://docs.docker.com/compose/install/)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#run)

## ⭑ Run

In the project directory, you can run:

```sh
docker-compose up -d
```

App will be exposed on `localhost:5000` and following the documentation in Swagger at `localhost:5000/api-docs` you can try the API Rest

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#flow-architecture-api-restful)

## ⭑ Flow architecture (API RESTful)

When the resource received a request, that request following these steps:

1. Default middlewares
2. Router
3. Parse and cache middlewares
4. Controller
5. Service (business logic layer)
6. Repository (Data layer)
7. DB

![arquitecture mi aguila](https://raw.githubusercontent.com/javiermendozain/test-backend-microservice-mi-aguila/master/arquitecture.png)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#migration)

## ⭑ Migration

To _migrate_ data Json to mongoDB you should go inside the container run:

```sh
docker-compose exec microservice-trips sh
```

And for migrate run:

```sh
npm run migrate
```

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#run-unit-test-with-jest)

## ⭑ Run Unit Test with Jest

You can try two ways

1.  In container, for to go inside run:

```sh
docker-compose exec microservice-trips sh
```

Inside of container run:

```sh
npm run test
```

2. In the project directory, you can run:

```sh
npm intall
```

```sh
npm run test
```

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#all-commands)

## ⭑ All commands

| Command                                     | Description                                                         |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `docker-compose up -d`                      | Run project using docker compose exposed on `http://localhost:5000` |
| `docker-compose exec microservice-trips sh` | To go inside the container                                          |
| `npm install`                               | Installing dependencies                                             |
| `npm run migrate`                           | Run migrations                                                      |
| `npm run test`                              | Run tests                                                           |

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ⭑ License

Licensed under [MIT](https://opensource.org/licenses/MIT).

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#dependencies)

## ⭑ Dependencies

- **awilix**: ^4.2.3
- **compression**: ^1.7.4
- **cors**: ^2.8.5
- **express**: ^4.17.1
- **express-async-errors**: ^3.1.1
- **helmet**: ^3.21.2
- **memory-cache**: ^0.2.0
- **mongoose**: ^5.7.13
- **swagger-ui-express**: ^4.1.2
