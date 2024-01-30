const selectSleigh = require('./challenge12');

describe("Reto #12: Trineos eléctricos, ¡guau!", () => {
    it("Test #01: return type", () => {

        const distance = 30
        const sleighs = [
            { name: "Dasher", consumption: 0.3 },
            { name: "Dancer", consumption: 0.5 },
            { name: "Rudolph", consumption: 0.7 },
            { name: "Midu", consumption: 1 }
        ]

        expect(typeof selectSleigh(distance, sleighs)).toEqual("string");
    });

    it("Test #02: selectSleigh", () => {

        const distance = 1
        const sleighs = [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ]

        expect(selectSleigh(distance, sleighs)).toEqual("TMChein");
    });

    it("Test #03: selectSleigh", () => {

        const distance = 10
        const sleighs = [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 5 }
        ]

        expect(selectSleigh(distance, sleighs)).toEqual("Pedrosillano");
    });

    it("Test #04: selectSleigh", () => {

        const distance = 10
        const sleighs = [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ]

        expect(selectSleigh(distance, sleighs)).toEqual("SamarJaffal");
    });

    it("Test #05: selectSleigh", () => {

        const distance = 50
        const sleighs = [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ]

        expect(selectSleigh(distance, sleighs)).toEqual(null);
    });
});
