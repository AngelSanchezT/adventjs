const fitsInOneBox = require('./challenge04');

describe("Reto #4: Una caja dentro de otra caja y otra...", () => {
  
  it("Test #01: return type", () => {
    const result = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]) // true
    expect(typeof result).toEqual("boolean");
  });

  it("Test #02: fitsInOneBox", () => {

    const result = fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ])

    const expected = false;

    expect(result).toEqual(expected);

  });

  it("Test #03: fitsInOneBox", () => {

    const result = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]);

    const expected = true;

    expect(result).toEqual(expected);

  });

  it("Test #04: fitsInOneBox", () => {
    const result = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ]);

    const expected = false;

    expect(result).toEqual(expected);

  });

  it("Test #05: fitsInOneBox", () => {

    const result = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 }
    ]);

    const expected = false;

    expect(result).toEqual(expected);

  });

  it("Test #06: fitsInOneBox", () => {
    const result = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]);

    const expected = true;

    expect(result).toEqual(expected);

  });

});