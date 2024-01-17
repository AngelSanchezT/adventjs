const wrapping = require('./challenge01');

describe("Reto #1: ¡Automatizando envolver regalos de navidad&excl;", () => {
  it("Test #01: return type", () => {
    const gifts = ['cat', 'game', 'socks'];
    expect(typeof wrapping(gifts)).toEqual("object");
  });

  it("Test #02: wrapping(['cat', 'game', 'socks'])", () => {
    const gifts = ['cat', 'game', 'socks'];
    const result = wrapping(gifts);
    const expected = [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ]
    expect(result).toEqual(expected);
  });

  it("Test #03: wrapping(['midu'])", () => {
    const result = wrapping(["midu"]);
    const expected = [
      "******\n*midu*\n******"
    ];
    expect(result).toEqual(expected);
  });

  it("Test #04: wrapping(['a'])", () => {
    const result = wrapping(["a"]);
    const expected = [
      "***\n*a*\n***"
    ];
    expect(result).toEqual(expected);
  });

  it("Test #05: Test: wrapping an empty array should return an empty array", () => {
    const result = wrapping([]);
    const expected = [];
    expect(result).toEqual(expected);
  });

});


/* 

Test #01
Test: return type

Expected:
"array"

Actual:
"array"
Test #02
Test: wrapping(gifts)

Expected:
[
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
]

Actual:
[]
Test #03
Test: wrapping(["midu"])

Expected:
[
  "******\n*midu*\n******"
]

Actual:
[]
Test #04
Test: wrapping(["a"])

Expected:
[
  "***\n*a*\n***"
]

Actual:
[]
Test #05
Test: wrapping an empty array should return an empty array

Expected:
[]

Actual:
[]
Test #06 (secret 🔒)
Test #07 (secret 🔒)

*/