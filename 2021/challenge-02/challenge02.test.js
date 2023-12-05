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

        console.log(typeof expected);
        console.log(regalos);

        expect(typeof regalos).toEqual('object');
        expect(regalos).toEqual(expected);
    });

    it("Test#02: listGifts('_bici _ a m __ b c a b c ')", () => {
        const carta = '_bici _ a m __ b c a b c ';
        const regalos = listGifts(carta);

        const expected = { "a": 2, "m": 1, "b": 2, "c": 2 }

        console.log(regalos);

        expect(typeof regalos).toEqual('object');
        expect(regalos).toEqual(expected);
    });

});