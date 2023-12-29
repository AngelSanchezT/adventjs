const checkIsValidCopy = require('./challenge12');

describe('Challenge #12: 📸 Is it a valid copy?', () => {
    it("Test #01 : checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#') | Expected: 'boolean'", () => {
        expect(typeof checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toEqual("boolean")
    });

    it("Test #02 : checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#') | Expected: true", () => {
        const result = checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#');
        const expected = true;

        expect(result).toEqual(expected);
    });

    it("Test #03 : checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#') | Expected: false", () => {
        const result = checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#');
        const expected = false;

        expect(result).toEqual(expected);
    });

    it("Test #04 : checkIsValidCopy('Santa Claus', ' Santa Claus ') | Expected: false", () => {
        const result = checkIsValidCopy('Santa Claus', ' Santa Claus ');
        const expected = false;

        expect(result).toEqual(expected);
    });

    it("Test #05 : checkIsValidCopy('Santa Claus', '###:. c:+##') | Expected: true", () => {
        const result = checkIsValidCopy('Santa Claus', '###:. c:+##');
        const expected = true;

        expect(result).toEqual(expected);
    });

    it("Test #06 : checkIsValidCopy('Santa Claus', 'sant##claus+') | Expected: false", () => {
        const result = checkIsValidCopy('Santa Claus', 'sant##claus+');
        const expected = false;

        expect(result).toEqual(expected);
    });

    it("Test #07 : checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s') | Expected: true", () => {
        const result = checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s');
        const expected = true;

        expect(result).toEqual(expected);
    });

    it("Test #08 : checkIsValidCopy('Santa Claus', 's#+:.#c:. s') | Expected: false", () => {
        const result = checkIsValidCopy('Santa Claus', 's#+:.#c:. s');
        const expected = false;

        expect(result).toEqual(expected);
    });

    it("Test #09 : checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s') | Expected: false", () => {
        const result = checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s');
        const expected = false;

        expect(result).toEqual(expected);
    });

    it("Test #10 : checkIsValidCopy('S#nta Claus', 'S#ntA ClauS') | Expected: false", () => {
        const result = checkIsValidCopy('S#nta Claus', 'S#ntA ClauS');
        const expected = false;

        expect(result).toEqual(expected);
    });

    it("Test #11 : checkIsValidCopy('3 #egalos', '3 .+:# #:') | Expected: true", () => {
        const result = checkIsValidCopy('3 #egalos', '3 .+:# #:');
        const expected = true;

        expect(result).toEqual(expected);
    });

    it("Test #12 : checkIsValidCopy('3 regalos', '3        ') | Expected: true", () => {
        const result = checkIsValidCopy('3 regalos', '3        ');
        const expected = true;

        expect(result).toEqual(expected);
    });

    it("Test #13 : checkIsValidCopy('3 regalos 3', '3 .+:# #: 3') | Expected: true", () => {
        const result = checkIsValidCopy('3 regalos 3', '3 .+:# #: 3');
        const expected = true;

        expect(result).toEqual(expected);
    });

    it("Test #14 : checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño') | Expected: false", () => {
        const result = checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño');
        const expected = false;

        expect(result).toEqual(expected);
    });

});