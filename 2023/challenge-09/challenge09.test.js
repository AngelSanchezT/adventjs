const adjustLights = require('./challenge09');

describe("Challenge #9: 🚦 Switch the lights", () => {
    
    it("Test #01: adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']) | Expected -> 1 (you change the fourth light to 🔴)", () => {
        const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
        const expected = 1; // -> 1 (you change the fourth light to 🔴)

        expect(result).toEqual(expected);
    });

    it("Test #02: adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']) | Expected -> 2 (you change the second light to 🟢 and the third to 🔴)", () => {
        const result = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
        const expected = 2; // -> 2 (you change the second light to 🟢 and the third to 🔴)

        expect(result).toEqual(expected);
    });

    it("Test #03: adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']) | Expected -> 0 (they are already alternating)", () => {
        const result = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
        const expected = 0; // -> 0 (they are already alternating)

        expect(result).toEqual(expected);
    });

    it("Test #04: adjustLights(['🔴', '🔴', '🔴']) | Expected -> 1 (you change the second light to 🟢)", () => {
        const result = adjustLights(['🔴', '🔴', '🔴']);
        const expected = 1; // -> 1 (you change the second light to 🟢)

        expect(result).toEqual(expected);
    });

});