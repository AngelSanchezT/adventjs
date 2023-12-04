const findNaughtyStep = require('./challenge03');

describe("Challenge #3: 😏 The naughty elf", () => {

    it("Test#01: return type | Expected: 'string'", () => {
        const result = findNaughtyStep('', '') // 'string' 
        expect(typeof result).toEqual('string');
    });

    it("Test#02: findNaughtyStep('abcd', 'abcde') | Expected: 'e'", () => {
        const original = 'abcd'
        const modified = 'abcde'
        const result = findNaughtyStep(original, modified) // 'e' 

        expect(result).toEqual('e');
    });

    it("Test#03: findNaughtyStep('abcde', 'abcd') | Expected: 'e'", () => {
        const original = 'abcde'
        const modified = 'abcd'
        const result = findNaughtyStep(original, modified) // 'e' 

        expect(result).toEqual('e');
    });

    it("Test#04: findNaughtyStep('xxxx', 'xxoxx') | Expected: 'o'", () => {
        const original = 'xxxx'
        const modified = 'xxoxx'
        const result = findNaughtyStep(original, modified) // 'o' 

        expect(result).toEqual('o');
    });

    it("Test#05: findNaughtyStep('stepfor', 'stepor') | Expected: 'f'", () => {
        const original = 'stepfor'
        const modified = 'stepor'
        const result = findNaughtyStep(original, modified) // 'f'

        expect(result).toEqual('f');

    });

    it("Test#06: findNaughtyStep('iiiii', 'iiiii') | Expected: ''", () => {
        const original = 'iiiii'
        const modified = 'iiiii'
        const result = findNaughtyStep(original, modified) // ''

        expect(result).toEqual('');

    });

    it("Test#07: findNaughtyStep('abcde', 'abcde')  | Expected: ''", () => {
        const original = 'abcde'
        const modified = 'abcde'
        const result = findNaughtyStep(original, modified) // ''

        expect(result).toEqual('');
    });

    it("Test#08: findNaughtyStep('', 'abcde')  | Expected: 'abcde'", () => {
        const original = ''
        const modified = 'abcde'
        const result = findNaughtyStep(original, modified) // ''

        expect(result).toEqual('abcde');
    });

    it("Test#08: findNaughtyStep('abcde', '')  | Expected: 'abcde'", () => {
        const original = 'abcde'
        const modified = ''
        const result = findNaughtyStep(original, modified) // ''

        expect(result).toEqual('abcde');
    });

    it("Test#09: findNaughtyStep('', '')  | Expected: ''", () => {
        expect(findNaughtyStep('', '')).toEqual('');
    });


    it("Test#10: findNaughtyStep('abc', 'abc')  | Expected: ''", () => {
        expect(findNaughtyStep('abc', 'abc')).toEqual('');
    });

    it("Test#11: findNaughtyStep('abcd', 'abecd')  | Expected: 'e'", () => {
        expect(findNaughtyStep('abcd', 'abecd')).toEqual('e');
    });

    it("Test#12: findNaughtyStep('abc', 'xyzabc')  | Expected: 'xyz'", () => {
        expect(findNaughtyStep('abc', 'xyzabc')).toEqual('xyz');
    });

});