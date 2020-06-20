const BaseService = require("./base.service");
let _tripRepository = null;

class TripService extends BaseService {
  constructor({ TripRepository }) {
    super(TripRepository);
    _tripRepository = TripRepository;
  }

  async getCountByCityName(cityName) {
    return await _tripRepository.getCountByCityName(cityName);
  }

  async getCountAll() {
    return await _tripRepository.getCountAll();
  }
}

module.exports = TripService;
