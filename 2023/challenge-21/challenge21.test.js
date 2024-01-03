const findBalancedSegment = require("./challenge21");

describe("Challenge #21: 🪐 Binary message", () => {
  it("Test #01: return type", () => {
    expect(typeof findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toEqual(
      "object"
    );
  });

  it("Test #02: findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])", () => {
    const result = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]);
    const expected = [2, 5];

    expect(result).toEqual(expected);
  });

  it("Test #03: findBalancedSegment([1, 1, 0])", () => {
    const result = findBalancedSegment([1, 1, 0]);
    const expected = [1, 2];

    expect(result).toEqual(expected);
  });

  it("Test #04: findBalancedSegment([1, 1, 1])", () => {
    const result = findBalancedSegment([1, 1, 1]);
    const expected = [];

    expect(result).toEqual(expected);
  });

  it("Test #05: findBalancedSegment([1, 0, 1])", () => {
    const result = findBalancedSegment([1, 0, 1]);
    const expected = [0, 1];

    expect(result).toEqual(expected);
  });

  it("Test #06: findBalancedSegment([1, 0, 1, 0])", () => {
    const result = findBalancedSegment([1, 0, 1, 0]);
    const expected = [0, 3];

    expect(result).toEqual(expected);
  });

  it("Test #07: findBalancedSegment([1, 1, 0, 1, 0, 1])", () => {
    const result = findBalancedSegment([1, 1, 0, 1, 0, 1]);
    const expected = [1, 4];

    expect(result).toEqual(expected);
  });

  it("Test #08: findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])", () => {
    const result = findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0]);
    const expected = [0, 7];

    expect(result).toEqual(expected);
  });

  it("Test #09: findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])", () => {
    const result = findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]);
    const expected = [5, 10];

    expect(result).toEqual(expected);
  });
});
