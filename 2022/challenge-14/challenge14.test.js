const getOptimalPath = require('./challenge14');

describe("Reto #14: El mejor camino", () => {
    it("Test #01: return type", () => {
        expect(typeof getOptimalPath([[0], [2, 3]])).toEqual("number");
    });

    it("Test #02: getOptimalPath([[0], [7, 4], [2, 4, 6]])", () => {
        expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toEqual(8);
    });

    it("Test #03: getOptimalPath([[0], [2, 3]])", () => {
        expect(getOptimalPath([[0], [2, 3]])).toEqual(2);
    });

    it("Test #04: getOptimalPath([[0], [3, 4], [9, 8, 1]])", () => {
        expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toEqual(5);
    });

    it("Test #05: getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])", () => {
        expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toEqual(8);
    });

    it("Test #06: getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])", () => {
        expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])).toEqual(7);
    });
});
