const countTime = require('./challenge09');

describe("Reto #9: Las locas luces de Navidad", () => {
    it("Test #01: return type", () => {
        const leds = [0, 1, 1, 0, 1];
        expect(typeof countTime(leds)).toEqual("number");
    });

    it("Test #02: countTime([0, 1, 1, 0, 1])", () => {
        const result = countTime([0, 1, 1, 0, 1]);
        const expected = 7;

        expect(result).toEqual(expected);
    });

    it("Test #03: countTime([0, 0, 0, 1])", () => {
        const result = countTime([0, 0, 0, 1]);
        const expected = 21;

        expect(result).toEqual(expected);
    });

    it("Test #04: countTime([0, 0, 1, 0, 0])", () => {
        const result = countTime([0, 0, 1, 0, 0]);
        const expected = 28;

        expect(result).toEqual(expected);
    });

    it("Test #05: countTime([1, 0, 0, 1, 0, 0])", () => {
        const result = countTime([1, 0, 0, 1, 0, 0]);
        const expected = 14;

        expect(result).toEqual(expected);
    });

    it("Test #06: countTime([1, 1, 0, 0, 0, 0])", () => {
        const result = countTime([1, 1, 0, 0, 0, 0]);
        const expected = 28;

        expect(result).toEqual(expected);
    });

    it("Test #07: countTime([1, 1, 1])", () => {
        const result = countTime([1, 1, 1]);
        const expected = 0;

        expect(result).toEqual(expected);
    });
});
