const canExit = require('./challenge24');

describe("Reto #24: El último reto es un laberinto", () => {

    it("Test #01: return type", () => {
        const result = canExit([
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ]);

        expect(typeof result).toEqual("boolean");
    });

    it("Test #02: canExit()", () => {
        const result = canExit([
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ]);

        expect(result).toEqual(true);
    });

    it("Test #03: canExit()", () => {
        const result = canExit([
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ]);

        expect(result).toEqual(false);
    });

    it("Test #04: canExit()", () => {
        const result = canExit([
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', ' ', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ]);

        expect(result).toEqual(false);
    });

    it("Test #05: canExit()", () => {
        const result = canExit([
            ['E', ' ', ' ', ' ', 'S']
        ]);

        expect(result).toEqual(true);
    });

    it("Test #06: canExit()", () => {
        const result = canExit([
            ['E', ' ', 'W', ' ', 'S']
        ]);

        expect(result).toEqual(false);
    });

    it("Test #07: canExit()", () => {
        const result = canExit([
            ['E', ' ', 'W', ' ', 'S']
        ]);

        expect(result).toEqual(false);
    });

    it("Test #08: canExit()", () => {
        const result = canExit([
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
        ]);

        expect(result).toEqual(true);
    });

    it("Test #09: canExit()", () => {
        const result = canExit([
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            ['W', 'W', 'W', 'W', 'W'],
        ]);

        expect(result).toEqual(true);
    });

    it("Test #10: canExit()", () => {
        const result = canExit([
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', 'W', ' ', ' '],
            ['W', 'W', 'W', 'W', 'W'],
        ]);

        expect(result).toEqual(false);
    });

    it("Test #11: canExit()", () => {
        const result = canExit([
            ['E', 'S', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'W', 'W']
        ]);

        expect(result).toEqual(true);
    });


});