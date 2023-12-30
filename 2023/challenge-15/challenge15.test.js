const autonomousDrive = require("./challenge15");

describe("Challenge #15: ↔️ Autonomous robot", () => {
  it("Test #01: return type | Expected: 'array'", () => {
    const result = autonomousDrive(["..!...."], ["R", "L"]);

    expect(typeof result).toEqual("object");
    expect(Array.isArray(result)).toEqual(true);
  });

  it("Test #02 autonomousDrive(['..!....'], ['R', 'L']) | Expected: ['..!....']", () => {
    const result = autonomousDrive(["..!...."], ["R", "L"]);
    const expected = ["..!...."];
    expect(result).toEqual(expected);
  });

  it("Test #03 autonomousDrive(['!..', '***'], ['R', 'L']) | Expected: ['!..', '***']", () => {
    const result = autonomousDrive(["!..", "***"], ["R", "L"]);
    const expected = ["!..", "***"];
    expect(result).toEqual(expected);
  });

  it("Test #04 autonomousDrive(['..!....','......*'], ['R', 'D', 'L']) | Expected: ['.......','..!...*']", () => {
    const result = autonomousDrive(["..!....", "......*"], ["R", "D", "L"]);
    const expected = [".......", "..!...*"];
    expect(result).toEqual(expected);
  });

  it("Test #05 autonomousDrive(['*..!..*','*.....*'],['R', 'R', 'R', 'D', 'D']) | Expected: ['*.....*','*....!*']", () => {
    const result = autonomousDrive(
      ["*..!..*", "*.....*"],
      ["R", "R", "R", "D", "D"]
    );
    const expected = ["*.....*", "*....!*"];
    expect(result).toEqual(expected);
  });

  it("Test #06 autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R']) | Expected: ['***','..!','***']", () => {
    const result = autonomousDrive(
      ["***", ".!.", "***"],
      ["D", "U", "R", "R", "R"]
    );
    const expected = ["***", "..!", "***"];
    expect(result).toEqual(expected);
  });

  it("Test #07 autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L']) | Expected: ['***','*!*','***']", () => {
    const result = autonomousDrive(["***", "*!*", "***"], ["D", "U", "R", "L"]);
    const expected = ["***", "*!*", "***"];
    expect(result).toEqual(expected);
  });

  it("Test #08 autonomousDrive(['.**.*.*.','.***....','..!.....'], ['D', 'U', 'R', 'R', 'R']) | Expected: ['.**.*.*.','.***....','.....!..']", () => {
    const result = autonomousDrive(
      [".**.*.*.", ".***....", "..!....."],
      ["D", "U", "R", "R", "R"]
    );
    const expected = [".**.*.*.", ".***....", ".....!.."];
    expect(result).toEqual(expected);
  });
});
