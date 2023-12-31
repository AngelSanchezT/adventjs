const transformTree = require("./challenge16");

describe("Challenge #16: ❌ Friday deployment", () => {
  it("Test #01: return type", () => {
    expect(typeof transformTree([])).toEqual("object");
  });

  it("Test #02: transformTree([]) | Expected: null", () => {
    const result = transformTree([]);
    const expected = null;

    expect(result).toEqual(expected);
  });

  it("Test #03: transformTree([1]) | Expected: { 'value': 1, 'left': null, 'right': null }", () => {
    const result = transformTree([1]);
    const expected = { value: 1, left: null, right: null };

    expect(result).toEqual(expected);
  });

  it("Test #04: transformTree([1, 2, 3]) | Expected: { 'value': 1, 'left': { 'value': 2, 'left': null, 'right': null }, 'right': { 'value': 3, 'left': null, 'right': null } }", () => {
    const result = transformTree([1, 2, 3]);
    const expected = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    };

    expect(result).toEqual(expected);
  });

  it("Test #05: transformTree([1, 2, 3, 4, 5]) | Expected: { 'value': 1, 'left': { 'value': 2, 'left': { 'value': 4, 'left': null, 'right': null }, 'right': { 'value': 5, 'left': null, 'right': null } }, 'right': { 'value': 3, 'left': null, 'right': null }}", () => {
    const result = transformTree([1, 2, 3, 4, 5]);
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: { value: 3, left: null, right: null },
    };

    expect(result).toEqual(expected);
  });

  it("Test #06: transformTree([1, 2, 3, 4, 5, 6, 7])", () => {
    const result = transformTree([1, 2, 3, 4, 5, 6, 7]);
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: { value: 7, left: null, right: null },
      },
    };

    expect(result).toEqual(expected);
  });

  it("Test #07: transformTree([17, 0, null, null, 1])", () => {
    const result = transformTree([17, 0, null, null, 1]);
    const expected = {
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: null,
    };

    expect(result).toEqual(expected);
  });

  it("Test #08: transformTree([3, 1, 0, 8, 12, null, 1])", () => {
    const result = transformTree([3, 1, 0, 8, 12, null, 1]);
    const expected = {
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 12,
          left: null,
          right: null,
        },
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };

    expect(result).toEqual(expected);
  });

  it("Test #09: transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])", () => {
    const result = transformTree([
      2,
      7,
      5,
      null,
      6,
      null,
      9,
      null,
      null,
      1,
      11,
      null,
      null,
      null,
      10,
    ]);
    const expected = {
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    };
    
    expect(result).toEqual(expected);
  });
});

/*

Test #09
Test: transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])

Expected:
{
  "value": 2,
  "left": {
    "value": 7,
    "left": null,
    "right": {
      "value": 6,
      "left": {
        "value": 1,
        "left": null,
        "right": null
      },
      "right": {
        "value": 11,
        "left": null,
        "right": null
      }
    }
  },
  "right": {
    "value": 5,
    "left": null,
    "right": {
      "value": 9,
      "left": null,
      "right": {
        "value": 10,
        "left": null,
        "right": null
      }
    }
  }
}

Actual:
[
  2,
  7,
  5,
  null,
  6,
  null,
  9,
  null,
  null,
  1,
  11,
  null,
  null,
  null,
  10
]
Test #10 secret
Test #11 secret
Test #12 secret
Test #13 secret

*/
