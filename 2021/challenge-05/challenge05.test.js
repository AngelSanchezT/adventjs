const daysToXmas = require('./challenge05');

describe("Reto #05: Contando los días para los regalos", () => {
    const r = new Date("Dec 2, 2021")
    const a = new Date("Dec 23, 2021 00:00:01")
    const n = new Date("Dec 23, 2021 23:59:59")
    const o = new Date("December 21, 2021 03:24:00");

    const t = new Date("Dec 25, 2021")
    const l = new Date("Dec 26, 2021")
    const _ = new Date("Dec 30, 2021")
    const u = new Date("Jan 2, 2022 00:00:01")
    const i = new Date("Jan 2, 2022 23:59:59");

    it("Test #01: Debe devolver un número", () => {
        expect(typeof daysToXmas(r)).toEqual("number");
    });

    it("Test #02: Del 2 de diciembre al 25 van 23 días", () => {
        expect(daysToXmas(r)).toEqual(23);
    });

    it("Test #03: Del 23 de diciembre al 25 van 2 días", () => {
        expect(daysToXmas(a)).toEqual(2);
    });

    it("Test #04: Revisa que cuentas bien los d\xedas aunque sea a las 23:59:59 horas... \ud83d\ude1d", () => {
        expect(daysToXmas(n)).toEqual(2);
    });

    it("Test #05: No me sale que el 21 de diciembre al 25 van 4 d\xedas... \ud83e\udd14", () => {
        expect(daysToXmas(o)).toEqual(4);
    });

    it("Test #06: Del 25 de diciembre al 25 de diciembre ser\xedan 0 d\xedas... \ud83c\udf85", () => {
        expect(daysToXmas(t)).toEqual(0);
    });

    it("Test #07: Deber\xedas devolver los d\xedas en negativo para fechas futuras... \ud83d\udd2e", () => {
        expect(daysToXmas(l)).toEqual(-1);
    });

    it("Test #08: Deber\xedas devolver los d\xedas en negativo para fechas futuras... \ud83d\udd2e", () => {
        expect(daysToXmas(_)).toEqual(-5);
    });

    it("Test #09: Deber\xedas devolver los d\xedas en negativo para fechas futuras... \ud83d\udd2e", () => {
        expect(daysToXmas(u)).toEqual(-8);
    });

    it("Test #10: Deber\xedas devolver los d\xedas en negativo para fechas futuras... \ud83d\udd2e", () => {
        expect(daysToXmas(i)).toEqual(-8);
    });


    

});