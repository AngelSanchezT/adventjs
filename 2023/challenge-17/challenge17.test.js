const optimizeIntervals = require("./challenge17");

describe("Challenge #17: 🛷 Optimizing the rental", () => {
  it("Test #01: Return Type | Expected: object", () => {
    expect(
      optimizeIntervals([
        [2, 7],
        [3, 4],
        [5, 8],
      ])
    ).toEqual("object");
  });

  it("Test #02: optimizeIntervals([[2, 7], [3, 4], [5, 8]])", () => {
    const result = optimizeIntervals([
      [2, 7],
      [3, 4],
      [5, 8],
    ]);
    const expected = [[2, 8]];

    expect(result).toEqual(expected);
  });

  it("Test #03: optimizeIntervals([[3, 4], [5, 8], [2, 7]])", () => {
    const result = optimizeIntervals([
      [3, 4],
      [5, 8],
      [2, 7],
    ]);
    const expected = [[2, 8]];

    expect(result).toEqual(expected);
  });

  it("Test #04: optimizeIntervals([[1, 3], [2, 6], [8, 10]])", () => {
    const result = optimizeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
    ]);
    const expected = [
      [1, 6],
      [8, 10],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #05: optimizeIntervals([[1, 2], [3, 4], [5, 6]])", () => {
    const result = optimizeIntervals([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #06: optimizeIntervals([[5, 7], [6, 8]])", () => {
    const result = optimizeIntervals([
      [5, 7],
      [6, 8],
    ]);
    const expected = [[5, 8]];

    expect(result).toEqual(expected);
  });

  it("Test #07: optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])", () => {
    const result = optimizeIntervals([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ]);
    const expected = [
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #08: optimizeIntervals([[1, 15], [8, 12], [4, 7]])", () => {
    const result = optimizeIntervals([
      [1, 15],
      [8, 12],
      [4, 7],
    ]);
    const expected = [[1, 15]];

    expect(result).toEqual(expected);
  });
});
