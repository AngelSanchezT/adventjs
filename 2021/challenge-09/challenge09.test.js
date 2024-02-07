const groupBy = require('./challenge09');

describe("Reto #09 - Agrupando cosas automáticamente", () => {

    it("Test #01: return type", () => {
        expect(typeof groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual("object");
    });

    it("Test #02: [6.1, 4.2, 6.3] con Math.floor deber\xeda ser { 6: [6.1, 6.3], 4: [4.2] }", () => {

        const collection = [6.1, 4.2, 6.3];

        const method = Math.floor;

        const expected = {
            6: [6.1, 6.3],
            4: [4.2]
        };

        expect(groupBy(collection, method)).toEqual(expected);
    });

    it("Test #03: [6.1, 4.2, 6.3] con Math.floor deber\xeda ser { 6: [6.1, 6.3], 4: [4.2] }", () => {
        const collection = ["one", "two", "three"];

        const method = "length";

        const expected = {
            3: ["one", "two"],
            5: ["three"]
        };

        expect(groupBy(collection, method)).toEqual(expected);

    });

    it("Test #04: ['one', 'two', 'three'] con 'length' deber\xeda ser { 3: ['one', 'two'], 5: ['three'] }", () => {
        const collection = ["one", "two", "three"];

        const method = "length";

        const expected = {
            3: ["one", "two"],
            5: ["three"]
        };
        expect(groupBy(collection, method)).toEqual(expected);

    });

    it("Test #05: No est\xe1s agrupando bien el ejemplo de las edades", () => {
        const collection = [{ age: 23 }, { age: 24 }];

        const method = "age";

        const expected = {
            23: [{
                age: 23
            }],
            24: [{
                age: 24
            }]
        };
        expect(groupBy(collection, method)).toEqual(expected);

    });

    it("Test #06: No est\xe1s agrupando bien el ejemplo de las edades", () => {
        const collection = [{ age: 23 }, { age: 24 }];

        const method = "age";

        const expected = {
            23: [{
                age: 23
            }],
            24: [{
                age: 24
            }]
        };

        expect(groupBy(collection, method)).toEqual(expected);

    });

    it("Test #07: No est\xe1s agrupando bien el ejemplo de las fechas", () => {
        const collection = [1397639141184, 13632237e5];

        const method = function (e) {
            return new Date(e).getFullYear();
        }

        const expected = {
            2013: [13632237e5],
            2014: [1397639141184]
        };
        expect(groupBy(collection, method)).toEqual(expected);
    });

    it("Test #08: No est\xe1s agrupando bien el ejemplo de las calificaciones", () => {
        const collection = [{
            title: "JavaScript: The Good Parts",
            rating: 8
        }, {
            title: "Aprendiendo Git",
            rating: 10
        }, {
            title: "Clean Code",
            rating: 9
        }];

        const method = "rating";

        const expected = {
            8: [{
                title: "JavaScript: The Good Parts",
                rating: 8
            }],
            9: [{
                title: "Clean Code",
                rating: 9
            }],
            10: [{
                title: "Aprendiendo Git",
                rating: 10
            }]
        };
        expect(groupBy(collection, method)).toEqual(expected);
    });

    it("Test #09: \xbfQu\xe9 pasa si no hay nada? Deber\xeda devolver un objeto vac\xedo...", () => {
        const collection = [];
        const method = "length";
        const expected = {};

        expect(groupBy(collection, method)).toEqual(expected);
    });

});
