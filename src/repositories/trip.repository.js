const BaseRepository = require("./base.repository");
let _trip = null;

class TripRepository extends BaseRepository {
  constructor({ Trip }) {
    super(Trip);
    _trip = Trip;
  }

  async getCountByCityName(cityName) {
    let _count = 0;

    await _trip.countDocuments({ city: { name: cityName } }, function (
      err,
      count
    ) {
      _count = count;
    });
    return { totalTrip: _count, byCityName: cityName };
  }

  async getCountAll() {
    let _count = 0;
    await _trip.countDocuments({}, function (err, count) {
      _count = count;
    });

    return { totalTrip: _count };
  }
}

module.exports = TripRepository;
