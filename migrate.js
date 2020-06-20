// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");

// Libraries
const { MONGO_URI } = require("./src/config");

// Models
const { Trip } = require("./src/models");

// Assets
const pathFileResource = "./fake/trips.json";

mongoose.set("useCreateIndex", true);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  .then(() => {
    try {
      console.log(
        ".........................MIGRATION........................."
      );

      const rawdata = fs.readFileSync(pathFileResource);
      const data = JSON.parse(rawdata);
      data.trips.map(async (trip) => {
        if (trip.start.date) {
          trip.start.date = new Date(trip.start.date["$date"]).toISOString();
        }
        if (trip.end.date) {
          trip.end.date = new Date(trip.end.date["$date"]).toISOString();
        }

        if (trip.createdAt) {
          trip.createdAt = new Date(trip.createdAt["$date"]).toISOString();
        }

        if (trip.updatedAt) {
          trip.updatedAt = new Date(trip.updatedAt["$date"]).toISOString();
        }

        const tripToSave = new Trip(trip);
        await tripToSave
          .save()
          .then(() => console.log("OK!"))
          .catch(console.log);
      });
    } catch (error) {
      console.error("[Migration Error]: " + error.message);
    }
  })
  .catch(console.log);
