const getStaircasePaths = require("./challenge24");

describe("Challenge #24: 🪜 Jump on the stairs", () => {
  it("Test #01: return type", () => {
    expect(typeof getStaircasePaths(4, 2)).toEqual("object");
  });

  it("Test #02: getStaircasePaths(4, 2)", () => {
    const result = getStaircasePaths(4, 2);
    const expected = [
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 2],
    ];
    expect(result).toEqual(expected);
  });

  it("Test #03: getStaircasePaths(0, 0)", () => {
    const result = getStaircasePaths(0, 0);
    const expected = [[]];
    expect(result).toEqual(expected);
  });

  it("Test #04: getStaircasePaths(1, 1)", () => {
    const result = getStaircasePaths(1, 1);
    const expected = [[1]];
    expect(result).toEqual(expected);
  });

  it("Test #05: getStaircasePaths(7, 3)", () => {
    const result = getStaircasePaths(7, 3);
    const expected = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 2, 1, 1],
      [1, 1, 1, 2, 2],
      [1, 1, 1, 3, 1],
      [1, 1, 2, 1, 1, 1],
      [1, 1, 2, 1, 2],
      [1, 1, 2, 2, 1],
      [1, 1, 2, 3],
      [1, 1, 3, 1, 1],
      [1, 1, 3, 2],
      [1, 2, 1, 1, 1, 1],
      [1, 2, 1, 1, 2],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 3],
      [1, 2, 2, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 1],
      [1, 3, 1, 1, 1],
      [1, 3, 1, 2],
      [1, 3, 2, 1],
      [1, 3, 3],
      [2, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 2, 1],
      [2, 1, 1, 3],
      [2, 1, 2, 1, 1],
      [2, 1, 2, 2],
      [2, 1, 3, 1],
      [2, 2, 1, 1, 1],
      [2, 2, 1, 2],
      [2, 2, 2, 1],
      [2, 2, 3],
      [2, 3, 1, 1],
      [2, 3, 2],
      [3, 1, 1, 1, 1],
      [3, 1, 1, 2],
      [3, 1, 2, 1],
      [3, 1, 3],
      [3, 2, 1, 1],
      [3, 2, 2],
      [3, 3, 1],
    ];
    expect(result).toEqual(expected);
  });

  it("Test #06: getStaircasePaths(3, 3)", () => {
    const result = getStaircasePaths(3, 3);
    const expected = [[1, 1, 1], [1, 2], [2, 1], [3]];
    expect(result).toEqual(expected);
  });

  it("Test #07: getStaircasePaths(2, 1)", () => {
    const result = getStaircasePaths(2, 1);
    const expected = [[1, 1]];
    expect(result).toEqual(expected);
  });

  it("Test #08: getStaircasePaths(5, 2)", () => {
    const result = getStaircasePaths(5, 2);
    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
    ];
    expect(result).toEqual(expected);
  });
});
