const getCoins = require('./challenge10');

describe("Reto #10 - La máquina de cambio", () => {

    it("Test #01: return type", () => {
        expect(typeof getCoins(51)).toEqual("object");
    });

    it("Test #02: Para devolver 51 necesitas una moneda de 1 c\xe9ntimo y otra de 50.", () => {
        expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1]);
    });

    it("Test #03: Para devolver 3, necesitas una moneda de 1 c\xe9ntimo y otra de 2.", () => {
        expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0]);
    });

    it("Test #04: Para devolver 5, s\xf3lo necesitas una moneda de 5 c\xe9ntimos", () => {
        expect(getCoins(5)).toEqual([0, 0, 1, 0, 0, 0]);
    });

    it("Test #05: Para devolver 16, necesitas una moneda de 1 c\xe9ntimo, otra de 5 y otra de 10.", () => {
        expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0]);
    });

    it("Test #06: Para devolver 100, necesitas dos monedas de 50 c\xe9ntimos", () => {
        expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2]);
    });

    it("Test #07: \xbfQu\xe9 necesitas para devolver 101? Sigue siendo un cambio v\xe1lido...", () => {
        expect(getCoins(101)).toEqual([1, 0, 0, 0, 0, 2]);
    });

    it("Test #08: Tambi\xe9n queremos devolver 111 c\xe9ntimos... A la gente le gusta el cambio.", () => {
        expect(getCoins(111)).toEqual([1, 0, 0, 1, 0, 2]);
    });

    it("Test #09: Tambi\xe9n queremos devolver 138 c\xe9ntimos... A la gente le gusta el cambio.", () => {
        expect(getCoins(138)).toEqual([1, 1, 1, 1, 1, 2]);
    });

});
