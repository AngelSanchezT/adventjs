const getMinJump = require('./challenge12');

describe("Reto #12 - La ruta perfecta para dejar los regalos", () => {

    it("Test #01: return type", () => {
        expect(typeof getMinJump([5, 3, 6, 7, 9])).toEqual("boolean");
    });

    it("Test #02: [5, 3, 6, 7, 9] necesita un salto m\xednimo de 4.", () => {
        expect(getMinJump([5, 3, 6, 7, 9])).toEqual(4);
    });

    it("Test #03: [2, 4, 6, 8, 10] necesita un salto m\xednimo de 7.", () => {
        expect(getMinJump([2, 4, 6, 8, 10])).toEqual(7);
    });

    it("Test #04: [9, 5, 1] necesita un salto m\xednimo de 2.", () => {
        expect(getMinJump([9, 5, 1])).toEqual(2);
    });

    it("Test #05: [3, 7, 5] necesita un salto m\xednimo de 2.", () => {
        expect(getMinJump([3, 7, 5])).toEqual(2);
    });

    it("Test #06: [14, 10, 8, 2, 3, 6] necesita un salto m\xednimo de 9", () => {
        expect(getMinJump([14, 10, 8, 2, 3, 6])).toEqual(9);
    });

    it("Test #07: Por complicada que sea la ruta, siempre debe tener una forma de saltar obst\xe1culos", () => {
        expect(getMinJump([2, 5, 8, 11, 14, 3, 6, 9])).toEqual(10);
    });

});
