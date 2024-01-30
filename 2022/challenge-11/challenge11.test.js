const getCompleted = require('./challenge11');

describe("Reto #11: Papá Noel es Scrum Master", () => {

    it("Test #01: return type", () => {
        expect(typeof getCompleted('01:00:00', '03:00:00')).toEqual("string");
    });

    it("Test #02: getCompleted('01:00:00', '03:00:00')", () => {
        expect(getCompleted('01:00:00', '03:00:00')).toEqual("1/3");
    });

    it("Test #03: getCompleted('02:00:00', '04:00:00')", () => {
        expect(getCompleted('02:00:00', '04:00:00')).toEqual("1/2");
    });

    it("Test #04: getCompleted('01:00:00', '01:00:00')", () => {
        expect(getCompleted('01:00:00', '01:00:00')).toEqual("1/1");
    });

    it("Test #05: getCompleted('00:10:00', '01:00:00')", () => {
        expect(getCompleted('00:10:00', '01:00:00')).toEqual("1/6");
    });

    it("Test #06: getCompleted('01:10:10', '03:30:30')", () => {
        expect(getCompleted('01:10:10', '03:30:30')).toEqual("1/3");
    });

    it("Test #07: getCompleted('02:20:20', '03:30:30')", () => {
        expect(getCompleted('02:20:20', '03:30:30')).toEqual("2/3");
    });

    it("Test #08: getCompleted('03:30:30', '05:50:50')", () => {
        expect(getCompleted('03:30:30', '05:50:50')).toEqual("3/5");
    });

});
