const checkJump = require('./challenge10');

describe("Reto #10: El salto del trineo de Papá Noel", () => {
    it("Test #01: return type", () => {
        expect(typeof checkJump([1, 3, 8, 5, 2])).toEqual("boolean");
    });

    it("Test #02: checkJump([1, 2, 1])", () => {
        expect(checkJump([1, 2, 1])).toEqual(true);
    });

    it("Test #03: checkJump([1, 3, 8, 5, 2])", () => {
        expect(checkJump([1, 3, 8, 5, 2])).toEqual(true);
    });

    it("Test #04: checkJump([1, 7, 3, 5])", () => {
        expect(checkJump([1, 7, 3, 5])).toEqual(false);
    });

    it("Test #05: checkJump([1, 2, 3, 2, 1])", () => {
        expect(checkJump([1, 2, 3, 2, 1])).toEqual(true);
    });

    it("Test #06: checkJump([1, 2, 2, 2, 1])", () => {
        expect(checkJump([1, 2, 2, 2, 1])).toEqual(true);
    });

    it("Test #07: checkJump([0, 1, 0])", () => {
        expect(checkJump([0, 1, 0])).toEqual(true);
    });

    it("Test #08: checkJump([2, 2, 2, 2])", () => {
        expect(checkJump([2, 2, 2, 2])).toEqual(false);
    });

    it("Test #09: checkJump([1, 2, 3])", () => {
        expect(checkJump([1, 2, 3])).toEqual(false);
    });

    it("Test #10: checkJump([1, 2, 3, 2, 1, 2, 3])", () => {
        expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toEqual(false);
    });

    it("Test #11: checkJump([1, 1000, 900, 800])", () => {
        expect(checkJump([1, 1000, 900, 800])).toEqual(true);
    });

    it("Test #12: checkJump([1, 1000, 100, 800])", () => {
        expect(checkJump([1, 1000, 100, 800])).toEqual(false);
    });

    it("Test #13: checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])", () => {
        expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toEqual(true);
    });

    it("Test #14: checkJump([1, 2, 3, 1, 3, 1])", () => {
        expect(checkJump([1, 2, 3, 1, 3, 1])).toEqual(false);
    });

    it("Test #15: checkJump([1, 3, 2, 5, 4, 3, 2, 1])", () => {
        expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toEqual(false);
    });
    
});