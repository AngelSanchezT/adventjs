const getMaxGifts = require('./challenge05');

describe("Reto #5: Optimizando viajes de Santa", () => {

    it("Test #01: return type", () => {

        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 20
        const maxCities = 3
        const result = getMaxGifts(giftsCities, maxGifts, maxCities); // 20
        expect(typeof result).toEqual("number");

    });

    it("Test #02: getMaxGifts([12, 3, 11, 5, 7], 20, 3)", () => {
        const result = getMaxGifts([12, 3, 11, 5, 7], 20, 3);
        expect(result).toEqual(20);
    });

    it("Test #03: getMaxGifts([50], 15, 1)", () => {
        const result = getMaxGifts([50], 15, 1);
        expect(result).toEqual(0);
    });

    it("Test #04: getMaxGifts([50], 100, 1)", () => {
        const result = getMaxGifts([50], 100, 1);
        expect(result).toEqual(50);
    });

    it("Test #05: getMaxGifts([50, 70], 100, 1)", () => {
        const result = getMaxGifts([50, 70], 100, 1);
        expect(result).toEqual(70);
    });

    it("Test #06: getMaxGifts([50, 70, 30], 100, 2)", () => {
        const result = getMaxGifts([50, 70, 30], 100, 2);
        expect(result).toEqual(100);
    });

    it("Test #07: getMaxGifts([50, 70, 30], 100, 3)", () => {
        const result = getMaxGifts([50, 70, 30], 100, 3);
        expect(result).toEqual(100);
    });

    it("Test #08: getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)", () => {
        const result = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4);
        expect(result).toEqual(100);
    });

    it("Test #09: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)", () => {
        const result = getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000);
        expect(result).toEqual(115);
    });

});