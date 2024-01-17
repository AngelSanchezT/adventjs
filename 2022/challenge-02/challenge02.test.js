const countHours = require('./challenge02');

describe("Reto #2: Nadie quiere hacer horas extra", () => {
    
    it("Test #01: return type", () => {
        expect(typeof countHours(2023, ['01/06', '04/01', '12/25'])).toEqual("number");
    });

    it("Test #02: countHours(2023, ['01/06', '04/01', '12/25'])", () => {
        const result = countHours(2023, ['01/06', '04/01', '12/25']);
        const expected = 4;

        expect(result).toEqual(expected);
    });

    it("Test #03: countHours(2022, ['01/06', '04/01', '12/25'])", () => {
        const result = countHours(2022, ['01/06', '04/01', '12/25']);
        const expected = 4;

        expect(result).toEqual(expected);
    });

    it("Test #04: countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])", () => {
        const result = countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']);
        const expected = 10;

        expect(result).toEqual(expected);
    });

    it("Test #05: countHours(2000, ['01/01'])", () => {
        const result = countHours(2000, ['01/01']);
        const expected = 0;

        expect(result).toEqual(expected);
    });

});
