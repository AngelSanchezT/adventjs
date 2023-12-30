const maxGifts = require("./challenge14");

describe("Challenge #14: 🚨 Avoid the alarm", () => {
  it("Test #01: return type | Expected: 'number'", () => {
    expect(typeof maxGifts([1, 2, 3, 1])).toEqual("number");
  });

  it("Test #02: maxGifts([1, 2, 3, 1]) | Expected: 4", () => {
    const result = maxGifts([1, 2, 3, 1]);
    const expected = 4;

    expect(result).toEqual(expected);
  });

  it("Test #03: maxGifts([2, 7, 9, 3, 1]) | Expected: 12", () => {
    const result = maxGifts([2, 7, 9, 3, 1]);
    const expected = 12;

    expect(result).toEqual(expected);
  });

  it("Test #04: maxGifts([0, 0, 0, 0, 1]) | Expected: 1", () => {
    const result = maxGifts([0, 0, 0, 0, 1]);
    const expected = 1;

    expect(result).toEqual(expected);
  });

  it("Test #05: maxGifts([100]) | Expected: 100", () => {
    const result = maxGifts([100]);
    const expected = 100;

    expect(result).toEqual(expected);
  });

  it("Test #06: maxGifts([1, 1, 1, 1]) | Expected: 2", () => {
    const result = maxGifts([1, 1, 1, 1]);
    const expected = 2;

    expect(result).toEqual(expected);
  });

  it("Test #07: maxGifts([1, 1, 1]) | Expected: 2", () => {
    const result = maxGifts([1, 1, 1]);
    const expected = 2;

    expect(result).toEqual(expected);
  });

  it("Test #08: maxGifts([3, 4, 5]) | Expected: 8", () => {
    const result = maxGifts([3, 4, 5]);
    const expected = 8;

    expect(result).toEqual(expected);
  });

  it("Test #09: maxGifts([99]) | Expected: 99", () => {
    const result = maxGifts([99]);
    const expected = 99;

    expect(result).toEqual(expected);
  });
});
