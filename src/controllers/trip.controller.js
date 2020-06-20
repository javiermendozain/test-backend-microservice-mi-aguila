let _tripService = null;
class TripController {
  constructor({ TripService }) {
    _tripService = TripService;
  }

  async getCountByCityName(req, res) {
    const { cityName } = req.params;

    const trips = await _tripService.getCountByCityName(cityName);
    return res.send(trips);
  }

  async getCountAll(req, res) {
    const trips = await _tripService.getCountAll();
    return res.send(trips);
  }

  async update(req, res) {
    const { body } = req;
    const { tripId } = req.params;
    const updatedTrip = await _tripService.update(tripId, body);
    return res.send(updatedTrip);
  }

  async create(req, res) {
    const { body } = req;

    const tripCreated = await _tripService.create(body);
    return res.send(tripCreated);
  }
}

module.exports = TripController;
