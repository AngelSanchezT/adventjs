const missingReindeer = require('./challenge14');

describe("Reto #14: En busca del reno perdido", () => {

    it("Test #01: return type", () => {
        const result = missingReindeer([5, 6, 1, 2, 3, 7, 0]);
        expect(typeof result).toEqual("number");
    });

    it("Test #02: [5, 6, 1, 2, 3, 7, 0] ser\xeda as\xed 4 el reno que se ha escapado", () => {
        const result = missingReindeer([5, 6, 1, 2, 3, 7, 0]);
        expect(result).toEqual(4);
    });

    it("Test #03: [0, 1] deber\xeda ser 2 el reno que falta", () => {
        const result = missingReindeer([0, 1]);
        expect(result).toEqual(2);
    });

    it("Test #04: [3, 0, 1] ser\xeda 2", () => {
        const result = missingReindeer([3, 0, 1]);
        expect(result).toEqual(2);
    });

    it("Test #05: El caso de [9, 2, 3, 5, 6, 4, 7, 0, 1] no est\xe1 bien...", () => {
        const result = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]);
        expect(result).toEqual(8);
    });

    it("Test #06: El caso de [0] no est\xe1 bien...", () => {
        const result = missingReindeer([0]);
        expect(result).toEqual(1);
    });

    it("Test #07: El caso de [1] no est\xe1 bien...", () => {
        const result = missingReindeer([1]);
        expect(result).toEqual(0);
    });

    it("Test #08: \xbfQu\xe9 pasa que si el n\xfamero de renos es muy grande no eres capaz de averiguarlo? :P", () => {
        const result = missingReindeer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23]);
        expect(result).toEqual(20);
    });


});
