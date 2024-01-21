const distributeGifts = require('./challenge03');

describe("Reto #3: ¿Cuántas cajas de regalos puede llevar Papá Noel?", () => {

    it("Test #01: return type", () => {

        const packOfGifts = ["book", "doll", "ball"];
        const reindeers = ["dasher", "dancer"];

        expect(typeof distributeGifts(packOfGifts, reindeers)).toEqual("number");

    });

    it("Test #02: distributeGifts(packOfGifts, reindeers)", () => {

        const packOfGifts = ["book", "doll", "ball"];
        const reindeers = ["dasher", "dancer"];
        const result = distributeGifts(packOfGifts, reindeers);
        const expected = 2;

        expect(result).toEqual(expected);

    });

    it("Test #03: distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {

        const result = distributeGifts(['a', 'b', 'c'], ['d', 'e']);
        const expected = 1;

        expect(result).toEqual(expected);

    });

    it("Test #04: distributeGifts(['videogames', 'console'], ['midu'])", () => {

        const result = distributeGifts(['videogames', 'console'], ['midu']);
        const expected = 0;

        expect(result).toEqual(expected);

    });

    it("Test #05: distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
        
        const result = distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']);
        const expected = 5;

        expect(result).toEqual(expected);

    });

    it("Test #06: distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
        
        const result = distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']);
        const expected = 26;

        expect(result).toEqual(expected);

    });
});