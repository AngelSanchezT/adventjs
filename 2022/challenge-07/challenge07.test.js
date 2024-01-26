const getGiftsToRefill = require('./challenge07');

describe("Reto #7: Haciendo inventario de regalos", () => {

    it("Test #01: return type", () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'muñeca', 'coche']
        const a3 = ['bici', 'pc', 'pc']

        expect(typeof getGiftsToRefill(a1, a2, a3)).toEqual("object");
    });

    it("Test #02: getGiftsToRefill(a1, a2, a3)", () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'muñeca', 'coche']
        const a3 = ['bici', 'pc', 'pc']
        const result = getGiftsToRefill(a1, a2, a3);
        const expected = ["muñeca", "pc"];

        expect(result).toEqual(expected);

    });

    it("Test #03: getGiftsToRefill([], [], [])", () => {
        const result = getGiftsToRefill([], [], []);
        const expected = [];

        expect(result).toEqual(expected);

    });

    it("Test #04: getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])", () => {
        const result = getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']);
        const expected = [];

        expect(result).toEqual(expected);

    });

    it("Test #05: getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])", () => {
        const result = getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']);
        const expected = ["a", "b", "c"];

        expect(result).toEqual(expected);

    });

    it("Test #06: getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])", () => {
        const result = getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']);
        const expected = ["a", "b", "c", "d", "e", "f"];

        expect(result).toEqual(expected);

    });

});
