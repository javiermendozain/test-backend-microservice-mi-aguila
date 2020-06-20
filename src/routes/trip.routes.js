// Dependenceis
const { Router } = require("express");

// Libraries
const { ParseIntMiddleware, CacheMiddleware } = require("../middlewares");
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ TripController }) {
  const router = Router();

  // CacheMiddleware(CACHE_TIME) omitted on first request
  router.get("/count/", [ParseIntMiddleware], TripController.getCountAll);
  router.get("/count/:cityName", TripController.getCountByCityName);
  router.post("/", TripController.create);
  router.put("/:tripId", TripController.update);

  return router;
};
