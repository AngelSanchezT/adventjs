const shouldBuyFidelity = require('./challenge11');

describe("Reto #11: ¿Vale la pena la tarjeta fidelidad del cine?", () => {

    it("Test #01: return type", () => {
        expect(typeof shouldBuyFidelity(0)).toEqual("boolean");
    });

    it("Test #02: Si no vamos nunca al cine, seguro que no vale la pena la tarjeta fidelidad.", () => {
        expect(shouldBuyFidelity(0)).toEqual(false);
    });

    it("Test #03: Si s\xf3lo voy una vez, seguro que no me sale a cuenta la tarjeta fidelidad.", () => {
        expect(shouldBuyFidelity(1)).toEqual(false);
    });

    it("Test #04: Si voy a ver Spiderman y Matrix s\xf3lo, no vale la pena la tarjeta fidelidad.", () => {
        expect(shouldBuyFidelity(1)).toEqual(false);
    });

    it("Test #05: Aunque vaya 10 veces, no vale la pena la tarjeta fidelidad.", () => {
        expect(shouldBuyFidelity(10)).toEqual(false);
    });

    it("Test #06: Aunque vaya 20 veces, no vale la pena la tarjeta fidelidad.", () => {
        expect(shouldBuyFidelity(10)).toEqual(false);
    });

    it("Test #07: Todav\xeda no vale la pena la tarjeta fidelidad...", () => {
        expect(shouldBuyFidelity(23)).toEqual(false);
    });

    it("Test #08: En alg\xfan momento debe valer la pena la tarjeta de fidelidad, no?", () => {
        expect(shouldBuyFidelity(24)).toEqual(true);
    });

    it("Test #09: En alg\xfan momento debe valer la pena la tarjeta de fidelidad, no?", () => {
        expect(shouldBuyFidelity(25)).toEqual(true);
    });

    it("Test #11: En alg\xfan momento debe valer la pena la tarjeta de fidelidad, no?", () => {
        expect(shouldBuyFidelity(48)).toEqual(true);
    });

    it("Test #12: Si voy 100 veces al cine, seguro que sale a cuenta la tarjeta fidelidad", () => {
        expect(shouldBuyFidelity(100)).toEqual(true);
    });

    it("Test #13: Si voy 100 veces al cine, seguro que sale a cuenta la tarjeta fidelidad", () => {
        expect(shouldBuyFidelity(100)).toEqual(true);
    });

    it("Test #14: Si voy 1000 veces al cine, seguro que sale a cuenta la tarjeta fidelidad", () => {
        expect(shouldBuyFidelity(1e3)).toEqual(true);
    });
});
