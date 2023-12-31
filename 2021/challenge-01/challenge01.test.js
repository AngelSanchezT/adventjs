const contarOvejas = require('./challenge01');

describe('Challenge #1: Contando ovejas para domir!', () => {

    it('Test #01: ', () => {
        const ovejas = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' },
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo' }
        ];

        const valueExpect = [
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' }
        ];

        const result = contarOvejas(ovejas);
        expect(result).toEqual(valueExpect);
    });

    it('Test #02', () => {
        const ovejas = [
            { name: "Noa", color: "azul" },
            { name: "Euge", color: "rojo" },
            { name: "Navidad", color: "rojo" },
            { name: "Ki Na Ma", color: "rojo" },
            { name: "Nnnnnn", color: "rojo" },
            { name: "Aaa aaa", color: "rojo" },
            { name: "na", color: "azul" }
        ];

        const resultado = contarOvejas(ovejas);

        expect(resultado?.length).toEqual(2);
        expect(resultado[0].name).toEqual("Navidad");
        expect(resultado[1].name).toEqual("Ki Na Ma");

    });
})