const revealSabotage = require("./challenge19");

describe("Challenge #19: 💣 Face the sabotage", () => {
  it("Test #01: Return Type | Expected: array", () => {
    expect(typeof
      revealSabotage([
        ["*", " ", " ", " "],
        [" ", " ", "*", " "],
        [" ", " ", " ", " "],
        ["*", " ", " ", " "],
      ])
    ).toEqual("object");
  });

  it('Test #02: revealSabotage([["*", " ", " ", " "],[" ", " ", "*", " "],[" ", " ", " ", " "],["*", " ", " ", " "],])', () => {
    const result = revealSabotage([
      ["*", " ", " ", " "],
      [" ", " ", "*", " "],
      [" ", " ", " ", " "],
      ["*", " ", " ", " "],
    ]);

    const expected = [
      ["*", "2", "1", "1"],
      ["1", "2", "*", "1"],
      ["1", "2", "1", "1"],
      ["*", "1", " ", " "],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #03: revealSabotage([[' ', ' ', ' '],[' ', '*', ' '],[' ', ' ', ' ']])", () => {
    const result = revealSabotage([
      [" ", " ", " "],
      [" ", "*", " "],
      [" ", " ", " "],
    ]);

    const expected = [
      ["1", "1", "1"],
      ["1", "*", "1"],
      ["1", "1", "1"],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #04: revealSabotage([['*', ' ', ' '],[' ', '*', ' '],[' ', ' ', '*']])", () => {
    const result = revealSabotage([
      ["*", " ", " "],
      [" ", "*", " "],
      [" ", " ", "*"],
    ]);

    const expected = [
      ["*", "2", "1"],
      ["2", "*", "2"],
      ["1", "2", "*"],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #05: revealSabotage([['*', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']])", () => {
    const result = revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);

    const expected = [
      ["*", "1", " "],
      ["1", "1", " "],
      [" ", " ", " "],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #06: revealSabotage([['*', '*', '*'],['*', ' ', '*'],['*', '*', '*']])", () => {
    const result = revealSabotage([
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ]);

    const expected = [
      ["*", "*", "*"],
      ["*", "8", "*"],
      ["*", "*", "*"],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #07: revealSabotage([['*', ' ', '*']])", () => {
    const result = revealSabotage([["*", " ", "*"]]);

    const expected = [["*", "2", "*"]];

    expect(result).toEqual(expected);
  });

  it("Test #08: revealSabotage([['*', ' ', ' '],[' ', ' ', ' '],[' ', ' ', '*']])", () => {
    const result = revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", "*"],
    ]);

    const expected = [
      ["*", "1", " "],
      ["1", "2", "1"],
      [" ", "1", "*"],
    ];

    expect(result).toEqual(expected);
  });

  it("Test #09: revealSabotage([['*', ' ', ' ', ' ', ' '],[' ', ' ', ' ', ' ', ' '],[' ', ' ', '*', ' ', ' '],[' ', ' ', ' ', ' ', ' '],[' ', ' ', ' ', ' ', '*']])", () => {
    const result = revealSabotage([
      ["*", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "*", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "*"],
    ]);

    const expected = [
      ["*", "1", " ", " ", " "],
      ["1", "2", "1", "1", " "],
      [" ", "1", "*", "1", " "],
      [" ", "1", "1", "2", "1"],
      [" ", " ", " ", "1", "*"],
    ];

    expect(result).toEqual(expected);
  });
});
