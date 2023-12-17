const organizeGifts = require('./challenge08');

describe("Challenge #8: 🏬 Sorting the warehouse", () => {
    it("Test #01: return type | Expected: 'function'", () => {
        expect(typeof organizeGifts).toEqual('function');
    });

    it('Test #02: organizeGifts("76a11b")', () => {
        const result = organizeGifts("76a11b");
        const expected = "[a]{a}{a}(aaaaaa){b}(b)";

        expect(result).toEqual(expected);
    });

    it('Test #03: organizeGifts("20a")', () => {
        const result = organizeGifts("20a");
        const expected = "{a}{a}";

        expect(result).toEqual(expected);
    });

    it('Test #04: organizeGifts("70b120a4c")', () => {
        const result = organizeGifts("70b120a4c");
        const expected = "[b]{b}{b}[a][a]{a}{a}(cccc)";

        expect(result).toEqual(expected);
    });

    it('Test #05: organizeGifts("9c")', () => {
        const result = organizeGifts("9c");
        const expected = "(ccccccccc)";

        expect(result).toEqual(expected);
    });

    it('Test #06: organizeGifts("19d51e")', () => {
        const result = organizeGifts("19d51e");
        const expected = "{d}(ddddddddd)[e](e)";

        expect(result).toEqual(expected);
    });
});