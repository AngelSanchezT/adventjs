const fixLetter = require('./challenge16');

describe("Reto #16: Arreglando las cartas de Papá Noel", () => {

    it("Test #01: return type", () => {
        const result = fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
        expect(typeof result).toEqual("string");
    });

    it("Test #02: fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)", () => {
        const result = fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
        const expected = "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.";

        expect(result).toEqual(expected);
    });

    it("Test #03: fixLetter(\"  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?\")", () => {
        const result = fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?");
        const expected = "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?";

        expect(result).toEqual(expected);
    });

    it("Test #04: fixLetter(\"  hi    santa    claus \")", () => {
        const result = fixLetter("  hi    santa    claus ");
        const expected = "Hi Santa Claus.";

        expect(result).toEqual(expected);
    });

    it("Test #05: fixLetter(\"  hi    santa    claus . santa claus is the best  \")", () => {
        const result = fixLetter("  hi    santa    claus . santa claus is the best  ");
        const expected = "Hi Santa Claus. Santa Claus is the best.";

        expect(result).toEqual(expected);
    });

    it("Test #06: fixLetter('  hi,santa claus. are you there ?   ')", () => {
        const result = fixLetter('  hi,santa claus. are you there ?   ');
        const expected = "Hi, Santa Claus. Are you there?";

        expect(result).toEqual(expected);
    });

    it("Test #07: fixLetter(\"Hey santa Claus .  I want a bike.   I want a videogame! \")", () => {
        const result = fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ");
        const expected = "Hey Santa Claus. I want a bike. I want a videogame!";

        expect(result).toEqual(expected);
    });
});
