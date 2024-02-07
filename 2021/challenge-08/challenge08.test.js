const maxProfit = require('./challenge08');

describe("Reto #08 - La locura de las criptomonedas", () => {

    it("Test #01: return type", () => {
        const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
        expect(typeof maxProfit(pricesBtc)).toEqual("number");
    });

    it("Test #02: [39, 18, 29, 25, 34, 32, 5], deber\xeda ser 16", () => {
        const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
        expect(maxProfit(pricesBtc)).toEqual(16);
    });

    it("Test #03: [10, 20, 30, 40, 50, 60, 70] deber\xeda ser 60", () => {
        const pricesBtc = [10, 20, 30, 40, 50, 60, 70];
        expect(maxProfit(pricesBtc)).toEqual(60);
    });

    it("Test #04: [1, 2, 3, 4] deber\xeda ser 3", () => {
        const pricesBtc = [1, 2, 3, 4];
        expect(maxProfit(pricesBtc)).toEqual(3);
    });

    it("Test #05: [6, 5, 4, 3] no tiene ganancias...", () => {
        const pricesBtc = [6, 5, 4, 3];
        expect(maxProfit(pricesBtc)).toEqual(-1);
    });

    it("Test #06: [1, 1, 1] no tiene ganancias", () => {
        const pricesBtc = [1, 1, 1];
        expect(maxProfit(pricesBtc)).toEqual(-1);
    });
});
