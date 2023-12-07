const maxDistance = require('./challenge06');

describe("Challenge #6: 🦌 The reindeer on trial", () => {
    it("Test #01: return type | Expected: 'number'", () => {
        const result =  maxDistance(">>*<");
        expect(typeof result),toEqual("number");
    });

    it("Test #02: maxDistance('>>*<') | Expected: 2", () => {
        const result =  maxDistance(">>*<");
        const expected = 2;

        expect(result),toEqual(expected);
    });

    it("Test #03: maxDistance('<<<<<') | Expected: 5", () => {
        const result =  maxDistance("<<<<<");
        const expected = 5;

        expect(result),toEqual(expected);
    });

    it("Test #04: maxDistance('>***>') | Expected: 5", () => {
        const result =  maxDistance(">***>");
        const expected = 5;

        expect(result),toEqual(expected);
    });

    it("Test #05: maxDistance('**********') | Expected: 10", () => {
        const result =  maxDistance("**********");
        const expected = 10;

        expect(result),toEqual(expected);
    });

    it("Test #06: maxDistance('<<**>>') | Expected: 2", () => {
        const result =  maxDistance("<<**>>");
        const expected = 2;

        expect(result),toEqual(expected);
    });
});