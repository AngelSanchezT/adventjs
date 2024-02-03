const checkStepNumbers = require('./challenge22');

describe("Reto #22: La iluminación en sintonía", () => {

    it("Test #01: return type", () => {
        const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
        const stepNumbers = [1, 33, 10, 2, 44, 20];

        const result = checkStepNumbers(systemNames, stepNumbers);

        expect(typeof result).toEqual("boolean");
    });

    it('Test #02: checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],[1, 33, 10, 2, 44, 20])', () => {
        const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
        const stepNumbers = [1, 33, 10, 2, 44, 20];

        const result = checkStepNumbers(systemNames, stepNumbers);

        expect(result).toEqual(true);
    });

    it('Test #03: checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])', () => {
        const systemNames = ["tree_1", "tree_1", "house"];
        const stepNumbers = [2, 1, 10];

        const result = checkStepNumbers(systemNames, stepNumbers);

        expect(result).toEqual(false);
    });

    it('Test #04: checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])', () => {
        const systemNames = ["tree_1", "tree_1", "house"];
        const stepNumbers = [1, 2, 10];

        const result = checkStepNumbers(systemNames, stepNumbers);

        expect(result).toEqual(true);
    });

    it('Test #05: checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])', () => {
        const systemNames = ["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"]
        const stepNumbers = [5, 2, 1, 2, 3, 4, 5, 6];

        const result = checkStepNumbers(systemNames, stepNumbers);

        expect(result).toEqual(false);
    });

});