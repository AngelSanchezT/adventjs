const checkPart = require('./challenge08');

describe("Reto #8: ¡Necesitamos un mecánico!", () => {

    it("Test #01: return type", () => {
        expect(typeof checkPart("uwu")).toEqual("boolean");
    });

    it('Test #02: checkPart("uwu")', () => {
        expect(checkPart("uwu")).toEqual(true);
    });

    it('Test #03: checkPart("midu")', () => {
        expect(checkPart("midu")).toEqual(false);
    });

    it('Test #04: checkPart("lolol")', () => {
        expect(checkPart("lolol")).toEqual(true);
    });

    it('Test #05: checkPart("yolooloy")', () => {
        expect(checkPart("yolooloy")).toEqual(true);
    });

    it('Test #05: checkPart("zzzoonzzz")', () => {
        expect(checkPart("zzzoonzzz")).toEqual(true);
    });
});
