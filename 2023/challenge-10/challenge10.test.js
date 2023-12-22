const createChristmasTree = require('./challenge10');

describe("Challenge #10: 🎄 Create your own Christmas tree", () => {
    it("Test #01: return type | Expected: 'string'", () => {
        const result = createChristmasTree("123", 4);
        const expected = "string";

        expect(typeof result).toEqual(expected);
    });

    it('Test #02: createChristmasTree("x", 3)', () => {
        const result = createChristmasTree("x", 3);
        const expected = "  x\n x x\nx x x\n  |\n";

        expect(result).toEqual(expected);
    });

    it('Test #03: createChristmasTree("xo", 4)', () => {
        const result = createChristmasTree("xo", 4);
        const expected = "   x\n  o x\n o x o\nx o x o\n   |\n";
        
        expect(result).toEqual(expected);
    });

    it('Test #04: createChristmasTree("123", 5)', () => {
        const result = createChristmasTree("123", 5);
        const expected = "    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n";
        
        expect(result).toEqual(expected);
    });

    it('Test #05: createChristmasTree("*@o", 3)', () => {
        const result = createChristmasTree("*@o", 3);
        const expected = "  *\n @ o\n* @ o\n  |\n";
        
        expect(result).toEqual(expected);
    });

    it('Test #06: createChristmasTree("123", 4)', () => {
        const result = createChristmasTree("123", 4);
        const expected = "   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n";

        expect(result).toEqual(expected);
    });
});