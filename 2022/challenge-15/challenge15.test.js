const decorateTree = require('./challenge15');

describe("Reto #15: Decorando el árbol de Navidad", () => {
    it("Test #01: return type", () => {
        expect(typeof decorateTree('B P R P')).toEqual("object");
    });

    it("Test #02: decorateTree('B P R P')", () => {
        const expected = [
            "R",
            "P B",
            "R B B",
            "B P R P"
        ];
        expect(decorateTree('B P R P')).toEqual(expected);
    });

    it("Test #03: decorateTree('B B')", () => {
        const expected = [
            "B",
            "B B"
        ];
        expect(decorateTree('B B')).toEqual(expected);
    });

    it("Test #04: decorateTree('B B P R P R R')", () => {
        const expected = [
            "B",
            "R P",
            "B P P",
            "P R B R",
            "P P B B P",
            "B R B B B R",
            "B B P R P R R"
        ];
        expect(decorateTree('B B P R P R R')).toEqual(expected);
    });

    it("Test #05: decorateTree('R R P R R')", () => {
        const expected = [
            "R",
            "R R",
            "P B P",
            "R B B R",
            "R R P R R"
        ];
        expect(decorateTree('R R P R R')).toEqual(expected);
    });
});
