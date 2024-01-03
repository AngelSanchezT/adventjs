const distributeGifts = require("./challenge20");

describe("Challenge #20: 🏋️‍♂️ Distribute the weight", () => {
  it("Test #01: return type", () => {
    expect(
      typeof distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ])
    ).toEqual("object");
  });

  it("Test #02: distributeGifts([[4, 5, 1],[6, null, 3],[8, null, 4]])", () => {
    const result = distributeGifts([
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4],
    ]);
    const expected = [
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #03: distributeGifts([[2, null],[null, 3]])", () => {
    const result = distributeGifts([
      [2, null],
      [null, 3],
    ]);

    const expected = [
      [2, 3],
      [3, 3],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #04: distributeGifts([[2, 1, 1],[3, 4, null]])", () => {
    const result = distributeGifts([
      [2, 1, 1],
      [3, 4, null],
    ]);

    const expected = [
      [2, 2, 1],
      [3, 3, 3],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #05: distributeGifts([[null, 5],[3, null]])", () => {
    const result = distributeGifts([
      [null, 5],
      [3, null],
    ]);

    const expected = [
      [4, 5],
      [3, 4],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #06: distributeGifts([[1, 2, 3],[4, 5, 6],[7, 8, 9]])", () => {
    const result = distributeGifts([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    const expected = [
      [2, 3, 4],
      [4, 5, 6],
      [6, 7, 8],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #07: distributeGifts([[null, 1, null, 1, null],[1, null, 1, null, 1],])", () => {
    const result = distributeGifts([
      [null, 1, null, 1, null],
      [1, null, 1, null, 1],
    ]);

    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];

    expect(result).toEqual(expected);
  });
});
