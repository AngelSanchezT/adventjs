const cyberReindeer = require('./challenge05');

describe("Challenge #5: 🛷 Santa's CyberTruck", () => {

    it("Test#01: cyberReindeer('S..|...|..', 10) | Expectd: array", () => {
        const result = cyberReindeer('S..|...|..', 10);
        expect(Array.isArray(result)).toEqual(true);
    });

    it("Test#02: cyberReindeer('S..|...|..', 10)", () => {
        const result = cyberReindeer('S..|...|..', 10);
        const expected = [
            "S..|...|..",
            ".S.|...|..",
            "..S|...|..",
            "..S|...|..",
            "..S|...|..",
            "...S...*..",
            "...*S..*..",
            "...*.S.*..",
            "...*..S*..",
            "...*...S.."
        ];

        expect(result).toEqual(expected);
    });

    it("Test#03: cyberReindeer('S.|.', 4)", () => {
        const result = cyberReindeer('S.|.', 4);
        const expected = [
            "S.|.",
            ".S|.",
            ".S|.",
            ".S|."
        ];

        expect(result).toEqual(expected);
    });

    it("Test#04: cyberReindeer('S.|.|.', 7)", () => {
        const result = cyberReindeer('S.|.|.', 7);
        const expected = [
            "S.|.|.",
            ".S|.|.",
            ".S|.|.",
            ".S|.|.",
            ".S|.|.",
            "..S.*.",
            "..*S*."
        ];

        expect(result).toEqual(expected);
    });

    it("Test#05: cyberReindeer('S.|..', 6)", () => {
        const result = cyberReindeer('S.|..', 6);
        const expected = [
            "S.|..",
            ".S|..",
            ".S|..",
            ".S|..",
            ".S|..",
            "..S.."
        ];

        expect(result).toEqual(expected);
    });

    it("Test#06: cyberReindeer('S.|.|.|......|.||.........', 8)", () => {
        const result = cyberReindeer('S.|.|.|......|.||.........', 8);
        const expected = [
            "S.|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            "..S.*.*......*.**.........",
            "..*S*.*......*.**.........",
            "..*.S.*......*.**........."
        ];

        expect(result).toEqual(expected);
    });

});