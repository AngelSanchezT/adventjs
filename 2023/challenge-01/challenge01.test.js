const findFirstRepeated = require('./challenge01')

describe('Challenge #1: 🎁 First gift repeated!', () => {

    it('Test #01: return type | Expected: "number"', () => {
        let result = findFirstRepeated([]);
        expect(typeof result).toEqual('number');
    });

    it('Test #02: findFirstRepeated([2, 1, 3, 5, 3, 2] | Expected: 3', () => {
        let gifts = [2, 1, 3, 5, 3, 2];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(3);
    });

    it('Test #03: findFirstRepeated([2, 2]) | Expected: 2', () => {
        let gifts = [2, 2];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(2);
    });

    it('Test #04: findFirstRepeated([2, 4, 3, 5, 1]) | Expected: -1', () => {
        let gifts = [2, 4, 3, 5, 1];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(-1);
    });

    it('Test #05: findFirstRepeated([1]) | Expected: -1', () => {
        let gifts = [1];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(-1);
    });

    it('Test #06: findFirstRepeated([]) | Expected: -1', () => {
        let gifts = [];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(-1);
    });

    it('Test #07: findFirstRepeated([10, 20, 30]) | Expected: -1', () => {
        let gifts = [10, 20, 30];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(-1);
    });

    it('Test #08: findFirstRepeated([5, 1, 2, 3, 2, 5, 1]) | Expected: 2', () => {
        let gifts = [5, 1, 2, 3, 2, 5, 1];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(2);
    });

    it('Test #09: findFirstRepeated([12, 20, 30, 11, 20, 12]) | Expected: 20', () => {
        let gifts = [12, 20, 30, 11, 20, 12];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(20);
    });

    it('Test #10: findFirstRepeated([-12, -20, -30, -11, -20, -12]) | Expected: -20', () => {
        let gifts = [-12, -20, -30, -11, -20, -12];
        let result = findFirstRepeated(gifts);
        expect(result).toEqual(-20);
    });
});