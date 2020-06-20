const { TripRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { Trip } = require("../../../src/models");
let {
  TripModelMock: { trips },
} = require("../../mocks");

describe("Trip Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a trip collection", async () => {
    mockingoose(Trip).toReturn(trips, "find");

    const _tripRepository = new TripRepository({ Trip });
    const expected = await _tripRepository.getAll();
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(trips);
  });
});
