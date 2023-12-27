const getIndexsForPalindrome = require('./challenge11');

describe('Challenge #11: 📖 The studious elves', () => {
    it('Test #01: Expected: function', () => {
        expect(typeof getIndexsForPalindrome).toBe('function');
    });

    it("Test #02: getIndexsForPalindrome('anna') | Expected: []", () =>{
        const result = getIndexsForPalindrome('anna');
        const expected = [];
        console.log("TEST02: result: ", result)
        expect(result).toEqual(expected);
    });

    it("Test #03: getIndexsForPalindrome('abab') | Expected: [0,1]", () =>{
        const result = getIndexsForPalindrome('abab');
        const expected = [0,1];

        expect(result).toEqual(expected);
    });

    it("Test #04: getIndexsForPalindrome('abac') | Expected: null", () =>{
        const result = getIndexsForPalindrome('abac');
        const expected = null;

        expect(result).toEqual(expected);
    });

    it("Test #05: getIndexsForPalindrome('aaaaaaaa') | Expected: []", () =>{
        const result = getIndexsForPalindrome('aaaaaaaa');
        const expected = [];

        expect(result).toEqual(expected);
    });

    it("Test #06: getIndexsForPalindrome('aaababa') | Expected: [1,3]", () =>{
        const result = getIndexsForPalindrome('aaababa');
        const expected = [1,3];

        expect(result).toEqual(expected);
    });

    it("Test #07: getIndexsForPalindrome('caababa') | Expected: null", () =>{
        const result = getIndexsForPalindrome('caababa');
        const expected = null;

        expect(result).toEqual(expected);
    });

    it("Test #08: getIndexsForPalindrome('rotavator') | Expected: []", () =>{
        const result = getIndexsForPalindrome('rotavator');
        const expected = [];

        expect(result).toEqual(expected);
    });

    it("Test #09: getIndexsForPalindrome('rotaratov') | Expected: [4,8]", () =>{
        const result = getIndexsForPalindrome('rotaratov');
        const expected = [4,8];

        expect(result).toEqual(expected);
    });

    it("Test #10: getIndexsForPalindrome('saippuakivikauppias') | Expected: []", () =>{
        const result = getIndexsForPalindrome('saippuakivikauppias');
        const expected = [];

        expect(result).toEqual(expected);
    });

});