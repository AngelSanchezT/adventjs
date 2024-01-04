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

  it("Test #04: compile('-+¿+?')", () => {
    const result = compile('-+¿+?');
    const expected = 0;
    
    expect(result).toEqual(expected);
  });

  it("Test #05: compile('++*¿-?')", () => {
    const result = compile('++*¿-?');
    const expected = 0;
    
    expect(result).toEqual(expected);
  });

  it("Test #06: compile('++%++<')", () => {
    const result = compile('++%++<');
    const expected = 6;
    
    expect(result).toEqual(expected);
  });

  it("Test #07: compile('++%++<++¿*?')", () => {
    const result = compile('++%++<++¿*?');
    const expected = 6;
    
    expect(result).toEqual(expected);
  });

  it("Test #08: compile('++¿+?¿+?¿+?')", () => {
    const result = compile('++¿+?¿+?¿+?');
    const expected = 5;
    
    expect(result).toEqual(expected);
  });

  it("Test #09: compile('--¿+++?')", () => {
    const result = compile('--¿+++?');
    const expected = -2;
    
    expect(result).toEqual(expected);
  });

  it("Test #10: compile('--¿+++?+++¿--?')", () => {
    const result = compile('--¿+++?+++¿--?');
    const expected = -1;
    
    expect(result).toEqual(expected);
  });

  it("Test #11: compile('<%+¿++%++<?')", () => {
    const result = compile('<%+¿++%++<?');
    const expected = 7;
    
    expect(result).toEqual(expected);
  });

  it("Test #12: compile('<<<<<<+<<<<<+%')", () => {
    const result = compile('<<<<<<+<<<<<+%');
    const expected = 2;
    
    expect(result).toEqual(expected);
  });

  it("Test #13: compile('<<<<<<+<<<<<+%')", () => {
    const result = compile('<<<<<<+<<<<<+%');
    const expected = 2;
    
    expect(result).toEqual(expected);
  });
});
