// Dependencies
const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const { TripService } = require("../services");

// controllers
const { TripController } = require("../controllers");

// routes
const { TripRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { Trip } = require("../models");

// repositories
const { TripRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    TripService: asClass(TripService).singleton(),
  })
  .register({
    TripController: asClass(TripController.bind(TripController)).singleton(),
  })
  .register({
    TripRoutes: asFunction(TripRoutes).singleton(),
  })
  .register({
    Trip: asValue(Trip),
  })
  .register({
    TripRepository: asClass(TripRepository).singleton(),
  });

module.exports = container;
