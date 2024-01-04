const compile = require("./challenge22");

describe("Challenge #22: 🚂 Programming language", () => {
  it("Test #01: return type", () => {
    expect(typeof compile("++*-")).toEqual("number");
  });

  it("Test #02: compile('++*-')", () => {
    const result = compile("++*-");
    const expected = 3;

    expect(result).toEqual(expected);
  });

  it("Test #02: compile('++*-')", () => {
    const result = compile("++*-");
    const expected = 3;
    
    expect(result).toEqual(expected);
  });

  it("Test #03: compile('++¿+?')", () => {
    const result = compile('++¿+?');
    const expected = 3;
    
    expect(result).toEqual(expected);
  });
});

/* 
Test: compile('-+¿+?')

Expected:
0

Actual:
0
Test #04
Test #05
Test: compile('++*¿-?')

Expected:
3

Actual:
0
Test #06
Test: compile('++%++<')

Expected:
6

Actual:
0
Test #07
Test: compile('++%++<++¿*?')

Expected:
16

Actual:
0
Test #08
Test: compile('++¿+?¿+?¿+?')

Expected:
5

Actual:
0
Test #09
Test: compile('--¿+++?')

Expected:
-2

Actual:
0
Test #10
Test: compile('--¿+++?+++¿--?')

Expected:
-1

Actual:
0
Test #11
Test: compile('<%+¿++%++<?')

Expected:
7

Actual:
0
Test #12
Test: compile('<<<<<<+<<<<<+%')

Expected:
2

Actual:
0
Test #13 secret
Test #14 secret
Test #15 secret
Test #16 secret
Test #17 secret


*/
