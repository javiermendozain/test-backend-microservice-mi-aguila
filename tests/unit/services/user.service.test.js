const { TripService } = require("../../../src/services");
const { TripRepositoryMock } = require("../../mocks");
const {
  TripModelMock: { trip, trips },
} = require("../../mocks");

describe("Trip Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return a trip collection", async () => {
    const TripRepository = TripRepositoryMock;
    TripRepository.getAll.mockReturnValue(trips);

    const _tripService = new TripService({
      TripRepository,
    });
    const expected = await _tripService.getAll();
    expect(expected).toMatchObject(trips);
  });

  it("Should update a trip by id", async () => {
    const TripRepository = TripRepositoryMock;
    TripRepository.update.mockReturnValue(trip);

    const _tripService = new TripService({
      TripRepository,
    });
    const expected = await _tripService.repository.update(trip._id, trip);
    expect(expected).toMatchObject(trip);
  });
});
