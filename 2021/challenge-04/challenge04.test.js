const createXmasTree = require('./challenge04');

describe("Reto #04: ¡Es hora de poner la navidad en casa!", () => {

    it("Return #01: return type", () => {
        expect(typeof createXmasTree(25)).toEqual("string");
    });

    it("Return #02: el árbol no deberá terminar con un salto de línea...", () => {
        expect(createXmasTree(25).endsWith("\n")).toEqual(false);
    });

    it("Return #03: el árbol de dos niveles correctamente!", () => {
        const result = createXmasTree(2);
        const expected = "_*_\n***\n_#_\n_#_";
        expect(result).toEqual(expected);
    });

    it("Return #04: el árbol de tres niveles correctamente!", () => {
        const result = createXmasTree(3);
        const expected = "__*__\n_***_\n*****\n__#__\n__#__";
        expect(result).toEqual(expected);
    });

    it("Return #05: el árbol de cuatro niveles correctamente!", () => {
        const result = createXmasTree(4);
        const expected = "___*___\n__***__\n_*****_\n*******\n___#___\n___#___";
        expect(result).toEqual(expected);
    });

    it("Return #06: el árbol de un nivel correctamente!", () => {
        const result = createXmasTree(1);
        const expected = "*\n#\n#";
        expect(result).toEqual(expected);
    });

});
