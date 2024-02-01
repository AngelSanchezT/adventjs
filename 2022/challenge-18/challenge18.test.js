const dryNumber = require('./challenge18');

describe("Reto #18: ¡Nos quedamos sin tinta!", () => {

    it("Test #01: return type", () => {
        expect(typeof dryNumber(1, 15)).toEqual("object");
    });

    it("Test #02: dryNumber(1, 15)", () => {
        const result = dryNumber(1, 15);
        const expected = [
            1,
            10,
            11,
            12,
            13,
            14,
            15
        ]
        expect(result).toEqual(expected);
    });

    it("Test #03: dryNumber(2, 20)", () => {
        const result = dryNumber(2, 20);
        const expected = [
            2,
            12,
            20
        ];
        expect(result).toEqual(expected);
    });

    it("Test #04: dryNumber(3, 33)", () => {
        const result = dryNumber(3, 33);
        const expected = [
            3,
            13,
            23,
            30,
            31,
            32,
            33
        ];
        expect(result).toEqual(expected);
    });

    it("Test #05: dryNumber(4, 45)", () => {
        const result = dryNumber(4, 45);
        const expected = [
            4,
            14,
            24,
            34,
            40,
            41,
            42,
            43,
            44,
            45
        ];
        expect(result).toEqual(expected);
    });

    it("Test #06: dryNumber(5, 55)", () => {
        const result = dryNumber(5, 55);
        const expected = [
            5,
            15,
            25,
            35,
            45,
            50,
            51,
            52,
            53,
            54,
            55
        ];
        expect(result).toEqual(expected);
    });

    it("Test #07: dryNumber(9, 8)", () => {
        const result = dryNumber(9, 8);
        const expected = [];
        expect(result).toEqual(expected);
    });

});
