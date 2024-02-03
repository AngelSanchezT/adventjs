const printTable = require('./challenge21');

describe("Reto #21: Creando la tabla de regalos", () => {

    it("Test #01: return type", () => {

        const result = printTable([
            { name: 'PlayStation 5', quantity: 9234782374892 },
            { name: 'Book Learn Web Dev', quantity: 23531 }
        ]);

        expect(typeof result).toEqual("string");

    });

    it("Test #02: printTable()", () => {

        const result = printTable([
            { name: 'PlayStation 5', quantity: 9234782374892 },
            { name: 'Book Learn Web Dev', quantity: 23531 }
        ]);

        const expected = "++++++++++++++++++++++++++++++++++++++\\n| Gift               | Quantity      |\\n| ------------------ | ------------- |\\n| PlayStation 5      | 9234782374892 |\\n| Book Learn Web Dev | 23531         |\\n**************************************";

        expect(result).toEqual(expected);

    });

    it("Test #03: printTable()", () => {

        const result = printTable([
            { name: 'Game', quantity: 2 },
            { name: 'Bike', quantity: 1 },
            { name: 'Book', quantity: 3 }
        ]);

        const expected = "+++++++++++++++++++\\n| Gift | Quantity |\\n| ---- | -------- |\\n| Game | 2        |\n| Bike | 1        |\\n| Book | 3        |\\n*******************";

        expect(result).toEqual(expected);

    });

    it("Test #04: printTable()", () => {

        const result = printTable([
            { name: 'Game', quantity: 10000 }
        ]);

        const expected = "+++++++++++++++++++\\n| Gift | Quantity |\\n| ---- | -------- |\\n| Game | 10000    |\\n*******************";

        expect(result).toEqual(expected);

    });

    it("Test #05: printTable()", () => {

        const result = printTable([
            { name: 'Game', quantity: 1234567890 }
        ]);

        const expected = "+++++++++++++++++++++\\n| Gift | Quantity   |\\n| ---- | ---------- |\\n| Game | 1234567890 |\\n*********************";

        expect(result).toEqual(expected);

    });

    it("Test #06: printTable()", () => {

        const result = printTable([
            { name: 'Toy', quantity: 12 },
            { name: 'Mic', quantity: 123 }
        ]);

        const expected = "+++++++++++++++++++\\n| Gift | Quantity |\\n| ---- | -------- |\\n| Toy  | 12       |\\n| Mic  | 123      |\\n*******************";

        expect(result).toEqual(expected);

    });

});