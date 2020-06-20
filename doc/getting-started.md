## Getting Started

## Technologies used

This project was build using:

- Node.js ( express )
- MongoDb ( mongosee as ODM )
- GitFlow
- Unit Testing ( Jest )
- Swagger ( Docs )
- Appnest/readme (Pretty readme 👌)
- N-layers ( Model as design patterns )
- Docker compose

## Requirements

To run this project you must have the requirements installed on your machine.

- [ Docker ](https://docs.docker.com/get-docker/)
- [Docker compose](https://docs.docker.com/compose/install/)

## Run

In the project directory, you can run:

```sh
docker-compose up -d
```

App will be exposed on `localhost:5000` and following the documentation in Swagger at `localhost:5000/api-docs` you can try the API Rest

## Flow architecture (API RESTful)

When the resource received a request, that request following these steps:

1. Default middlewares
2. Router
3. Parse and cache middlewares
4. Controller
5. Service (business logic layer)
6. Repository (Data layer)
7. DB

![arquitecture mi aguila](https://raw.githubusercontent.com/javiermendozain/test-backend-microservice-mi-aguila/master/arquitecture.png)

## Migration

To _migrate_ data Json to mongoDB you should go inside the container run:

```sh
docker-compose exec microservice-trips sh
```

And for migrate run:

```sh
npm run migrate
```

## Run Unit Test with Jest

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

## All commands

| Command                                     | Description                                                         |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `docker-compose up -d`                      | Run project using docker compose exposed on `http://localhost:5000` |
| `docker-compose exec microservice-trips sh` | To go inside the container                                          |
| `npm install`                               | Installing dependencies                                             |
| `npm run migrate`                           | Run migrations                                                      |
| `npm run test`                              | Run tests                                                           |
