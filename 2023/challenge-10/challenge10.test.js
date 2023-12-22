const createChristmasTree = require('./challenge10');

describe("Challenge #10: 🎄 Create your own Christmas tree", () => {
    it("Test #01: ", () => {
        const result = createChristmasTree("123", 4);
        const expected = "    1\n        2 3\n       1 2 3\n     1 2 3 1 2\n         |\n";

        expect(result).toEqual(expected);
    });

    it("Test #02: ", () => {
        const result = createChristmasTree("*@o", 3);
        const expected = "  *\n        @ o\n       * @ o\n         |\n";

        expect(result).toEqual(expected);
    });
});