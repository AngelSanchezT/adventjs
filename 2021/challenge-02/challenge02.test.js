const listGifts = require('./challenge02');

describe("Challenge 02 # ¡Ayuda al elfo a listar los regalos!", () => {
    it("Test#01: listGifts('bici coche balón _playstation bici coche peluche')", () => {
        const carta = 'bici coche balón _playstation bici coche peluche';
        const regalos = listGifts(carta);

        const expected = {
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1
        }

        console.log(regalos);

        expect(regalos).toEqual(expected);
    });
});