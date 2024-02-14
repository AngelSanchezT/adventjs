const checkSledJump = require('./challenge15');

describe("Reto 15: El salto perfecto", () => {
    it("Test #01: return type", () => {
        expect(typeof checkSledJump([1, 2, 3])).toEqual("boolean");
    });

    it("Test #02: [1, 2, 3] s\xf3lo va para arriba...", () => {
        expect(checkSledJump([1, 2, 3])).toEqual(false);
    });

    it("Test #03: [1, 2, 3, 2, 1] s\xed ser\xeda correcto", () => {
        expect(checkSledJump([1, 2, 3, 2, 1])).toEqual(true);
    });

    it("Test #04: [0, 1, 0] ser\xeda correcto", () => {
        expect(checkSledJump([0, 1, 0])).toEqual(true);
    });

    it("Test #05: [2, 4, 4, 6, 2] no ser\xeda correcto porque se queda dos veces en la altura 4...", () => {
        expect(checkSledJump([2, 4, 4, 6, 2])).toEqual(false);
    });

    it("Test #06: [0, 3, 2, 1] ser\xeda correcto... al final sube de golpe a 3 y luego baja...", () => {
        expect(checkSledJump([0, 3, 2, 1])).toEqual(true);
    });

    it("Test #07: [0, 1000, 1] ser\xeda correcto... crece y baja estrictamente", () => {
        expect(checkSledJump([0, 1e3, 1])).toEqual(true);
    });

    it("Test #08: Si se queda siempre en el suelo y no despega... imposible que sea correcto.", () => {
        expect(checkSledJump([0, 0, 0])).toEqual(false);
    });

    it("Test #09: Si baja, luego sube y luego baja... \xa1no es correcto!", () => {
        expect(checkSledJump([6, 5, 4, 5, 6, 7])).toEqual(false);
    });

    it("Test #10: Si sube, luego baja y luego sube... \xa1no es correcto!", () => {
        expect(checkSledJump([1, 2, 3, 4, 3, 2, 1, 2, 3])).toEqual(false);
    });

});
