const travelDistance = require("./challenge25");

describe("Challenge #25: 🗺️ Calculating distances", () => {
  it("Test #01: return type", () => {
    expect(
      typeof travelDistance(
        `.....1....
            ..S.......
            ..........
            ....3.....
            ......2...`
      )
    ).toEqual("number");
  });

  it("Test #02: Expected: 12", () => {
    const result = travelDistance(
      `.....1....
            ..S.......
            ..........
            ....3.....
            ......2...`
    );
    const expect = 12;
    expect(result).toEqual(expect);
  });

  it("Test #03: travelDistance(`..S.1...`) | Expected: 2", () => {
    const result = travelDistance(`..S.1...`);
    const expect = 2;
    expect(result).toEqual(expect);
  });

  it("Test #04: Expected: 13", () => {
    const result = travelDistance(
      `.....2....
        ..S.......
        ..........
        ....1.....
        ......3...`
    );
    const expect = 13;
    expect(result).toEqual(expect);
  });

  it("Test #05: Expected: 31", () => {
    const result = travelDistance(
      `3....1....
        ..S.......
        .........2
        ..........
        ......4...`
    );
    const expect = 31;
    expect(result).toEqual(expect);
  });

  it("Test #06: travelDistance(`S1`) | Expected: 1", () => {
    const result = travelDistance(`S1`);
    const expect = 1;
    expect(result).toEqual(expect);
  });

  it("Test #07: travelDistance(`1....S`) | Expected: 5", () => {
    const result = travelDistance(`1....S`);
    const expect = 5;
    expect(result).toEqual(expect);
  });

  it("Test #08: travelDistance(`S12....3`) | Expected: 7", () => {
    const result = travelDistance(`S12....3`);
    const expect = 7;
    expect(result).toEqual(expect);
  });
});
