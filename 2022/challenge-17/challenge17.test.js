const carryGifts = require('./challenge17');

describe("Reto #17: Llevando los regalos en sacos", () => {

    it("Test #01: return type", () => {
        expect(typeof carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual("object");
    });

    it("Test #02: carryGifts(['game', 'bike', 'book', 'toy'], 10)", () => {
        const result = carryGifts(['game', 'bike', 'book', 'toy'], 10);
        const expected = [
            "game bike",
            "book toy"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #03: carryGifts(['game', 'bike', 'book', 'toy'], 7)", () => {
        const result = carryGifts(['game', 'bike', 'book', 'toy'], 7);
        const expected = [
            "game",
            "bike",
            "book toy"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #04: carryGifts(['game', 'bike', 'book', 'toy'], 4)", () => {
        const result = carryGifts(['game', 'bike', 'book', 'toy'], 4);
        const expected = [
            "game",
            "bike",
            "book",
            "toy"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #05: carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)", () => {
        const result = carryGifts(['toy', 'gamme', 'toy', 'bike'], 6);
        const expected = [
            "toy",
            "gamme",
            "toy",
            "bike"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #06: carryGifts(['toy', 'toy', 'toy', 'toy'], 2)", () => {
        const result = carryGifts(['toy', 'toy', 'toy', 'toy'], 2);
        const expected = [];

        expect(result).toEqual(expected);
    });

    it("Test #07: carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)", () => {
        const result = carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7);
        const expected = [
            "toy toy",
            "disk",
            "disk toy",
            "toy"
        ];

        expect(result).toEqual(expected);
    });


});
