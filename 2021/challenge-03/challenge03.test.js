const isValid = require('./challenge03');

describe("El Grinch quiere fastidiar la Navidad", () => {

    it("Test #01: return type", () => {
        const letter = "bici coche (bal\xf3n) bici coche peluche";
        expect(typeof isValid(letter)).toEqual("boolean");
    });

    it("Test #02: isValid letter 'bici coche (balón) bici coche peluche' ",() => {
        const letter = "bici coche (balón) bici coche peluche";
        expect(isValid(letter)).toEqual(true);
    });

    it("Test #03: isValid letter '(muñeca) consola bici' ",() => {
        const letter = "(muñeca) consola bici";
        expect(isValid(letter)).toEqual(true);
    });

    it("Test #04: isValid letter 'bici coche (balón bici coche' ",() => {
        const letter = "bici coche (balón bici coche";
        expect(isValid(letter)).toEqual(false);
    });

    it("Test #05: isValid letter 'peluche (bici [coche) bici coche balón' ",() => {
        const letter = "peluche (bici [coche) bici coche balón";
        expect(isValid(letter)).toEqual(false);
    });

    it("Test #06: isValid letter '(peluche {) bici' ",() => {
        const letter = "(peluche {) bici";
        expect(isValid(letter)).toEqual(false);
    });

    it("Test #06: isValid letter '() bici' ",() => {
        const letter = "() bici";
        expect(isValid(letter)).toEqual(false);
    });

    it("Test #07: isValid letter '(()) bici' ",() => {
        const letter = "(()) bici";
        expect(isValid(letter)).toEqual(false);
    });

    it("Test #08: isValid letter '(a() bici (a)' ",() => {
        const letter = "(a() bici (a)";
        expect(isValid(letter)).toEqual(false);
    });

    it("Test #09: isValid letter '(a) (b) (c)' ",() => {
        const letter = "(a) (b) (c)";
        expect(isValid(letter)).toEqual(true);
    });

    it("Test #10: isValid letter ')bici( casa play' ",() => {
        const letter = ")bici( casa play";
        expect(isValid(letter)).toEqual(true);
    });

});
