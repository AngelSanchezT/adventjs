const sortToys = require("./challenge19");

describe("Reto #19: Ordenando los regalos", () => {

    it("Test #01: return type", () => {
        const toys = ['ball', 'doll', 'car', 'puzzle'];
        const positions = [2, 3, 1, 0];

        expect(typeof sortToys(toys, positions)).toEqual("object");
    });

    it("Test #02: sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])", () => {
        const toys = ['ball', 'doll', 'car', 'puzzle'];
        const positions = [2, 3, 1, 0];
        const result = sortToys(toys, positions);
        const expected = [
            "puzzle",
            "car",
            "ball",
            "doll"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #03: sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])", () => {
        const toys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
        const positions = [3, 1, 0, 2, 4];
        const result = sortToys(toys, positions);
        const expected = [
            "ps4",
            "xbox",
            "switch",
            "pc",
            "nintendo"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #04: sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])", () => {
        const toys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
        const positions = [8, 6, 5, 7, 9];
        const result = sortToys(toys, positions);
        const expected = [
            "ps4",
            "xbox",
            "switch",
            "pc",
            "nintendo"
        ];
        expect(result).toEqual(expected);
    });

    it("Test #05: sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111])", () => {
        const toys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'];
        const positions = [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111];
        const result = sortToys(toys, positions);
        const expected = [
            "l",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k"
        ];
        expect(result).toEqual(expected);
    });
});
