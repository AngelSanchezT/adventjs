const calculateTime = require('./challenge13')

describe("Challenge #13: ⌚️ Calculating the time", () => {
    it("Test #01 : return type | Expected: 'string'", () => {
        expect(typeof calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toEqual("string");
    });

    it("Test #02 calculateTime(['00:10:00', '01:00:00', '03:30:00']) | Expected: '-02:20:00' ", () => {
        const result = calculateTime(['00:10:00', '01:00:00', '03:30:00']);
        const expected = "-02:20:00";

        expect(result).toEqual(expected);
    });

    it("Test #03 calculateTime(['01:00:00', '05:00:00', '00:30:00']) | Expected: '-00:30:00' ", () => {
        const result = calculateTime(['01:00:00', '05:00:00', '00:30:00']);
        const expected = "-00:30:00";

        expect(result).toEqual(expected);
    });

    it("Test #04 calculateTime(['02:00:00', '05:00:00', '00:30:00']) | Expected: '00:30:00' ", () => {
        const result = calculateTime(['02:00:00', '05:00:00', '00:30:00']);
        const expected = "00:30:00";

        expect(result).toEqual(expected);
    });

    it("Test #05 calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']) | Expected: '-05:29:00' ", () => {
        const result = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']);
        const expected = "-05:29:00";

        expect(result).toEqual(expected);
    });

    it("Test #06 calculateTime(['02:00:00', '03:00:00', '02:00:00']) | Expected: '00:00:00' ", () => {
        const result = calculateTime(['02:00:00', '03:00:00', '02:00:00']);
        const expected = "00:00:00";

        expect(result).toEqual(expected);
    });

    it("Test #07 calculateTime(['01:01:01', '09:59:59', '01:01:01']) | Expected: '05:02:01' ", () => {
        const result = calculateTime(['01:01:01', '09:59:59', '01:01:01']);
        const expected = "05:02:01";

        expect(result).toEqual(expected);
    });

    it("Test #08 calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']) | Expected: '-00:00:01' ", () => {
        const result = calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']);
        const expected = "-00:00:01";

        expect(result).toEqual(expected);
    });
});