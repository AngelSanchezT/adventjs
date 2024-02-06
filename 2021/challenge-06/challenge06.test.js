const sumPairs = require('./challenge06');

describe("Reto #06: Rematando los exámenes finales", () => {

    it("Test #01: return type", () => {
        expect(typeof sumPairs([3, 5, 7, 2], 10)).toEqual("object");
    });

    it("Test #02: [3, 5, 7, 2] y 10, deber\xeda ser [3, 7]", () => {
        expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7]);
    });

    it("Test #03: [-3, -2, 7, -5] y 10, deber\xeda ser null", () => {
        expect(sumPairs([-3, -2, 7, -5], 10)).toEqual(null);
    });

    it("Test #04: [2, 2, 3, 1] y 4, deber\xeda ser [2, 2]", () => {
        expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2]);
    });

    it("Test #05: [6, 7, 1, 2] y 8, deber\xeda ser [6, 2]", () => {
        expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2]);
    });

    it("Test #06: [0, 2, 2, 3, -1, 1, 5] y 6, deber\xeda ser [1, 5]", () => {
        expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5]);
    });

    it("Test #07: \xbfSabes que el 0 tambi\xe9n existe, verdad? \ud83d\ude1d", () => {
        expect(sumPairs([0, 2, 3, -1, 4], 3)).toEqual([0, 3]);
    });

});