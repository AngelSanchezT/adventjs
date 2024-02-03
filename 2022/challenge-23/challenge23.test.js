const executeCommands = require('./challenge23');

describe("Reto #23: Compilador de Papá Noel", () => {

    it("Test #01: return type", () => {
        const result = executeCommands([
            'MOV 5,V00',  // V00 es 5
            'MOV 10,V01', // V01 es 10
            'DEC V00',    // V00 ahora es 4
            'ADD V00,V01' // V00 = V00 + V01 = 14
        ]);

        expect(typeof result).toEqual("object");
    });

    it("Test #02: executeCommands(['MOV 5,V00','MOV 10,V01','DEC V00','ADD V00,V01'])", () => {
        const result = executeCommands([
            'MOV 5,V00',  // V00 es 5
            'MOV 10,V01', // V01 es 10
            'DEC V00',    // V00 ahora es 4
            'ADD V00,V01' // V00 = V00 + V01 = 14
        ]);

        const expected = [14, 10, 0, 0, 0, 0, 0, 0];

        expect(result).toEqual(expected);
    });

    it("Test #03: executeCommands(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01'])", () => {
        const result = executeCommands([
            'MOV 255,V00',
            'INC V00',
            'DEC V01',
            'DEC V01'
        ]);

        const expected = [0, 254, 0, 0, 0, 0, 0, 0];

        expect(result).toEqual(expected);
    });

    it("Test #04: executeCommands(['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'])", () => {
        const result = executeCommands([
            'MOV 10,V00',
            'DEC V00',
            'INC V01',
            'JMP 1',
            'INC V06'
        ]);

        const expected = [0, 10, 0, 0, 0, 0, 1, 0];

        expect(result).toEqual(expected);
    });

    it("Test #05: executeCommands([ 'MOV 10,V00', 'MOV V00,V01', 'MOV V01,V02', 'MOV V02,V03', 'MOV V03,V04' ])", () => {
        const result = executeCommands([
            'MOV 10,V00',
            'MOV V00,V01',
            'MOV V01,V02',
            'MOV V02,V03',
            'MOV V03,V04'
        ]);

        const expected = [10, 10, 10, 10, 10, 0, 0, 0];

        expect(result).toEqual(expected);
    });

});