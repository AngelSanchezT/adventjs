const manufacture = require('./challenge02');

describe('Challenge #2: 🏭 We start the factory', () => {

    it.skip('PreTest#01: Validate Reg Exp', () => {

        let palabra1 = 'tren';
        let palabra2 = 'troesa';

         // Escapar caracteres especiales en la palabra2
        const palabra2Escapada = palabra2.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        console.log(palabra2Escapada);

         // Crear una expresión regular que busca cada caracter de palabra2
        const regex = new RegExp(`[${palabra2Escapada}]`, 'g');

        console.log(palabra1.match(regex));

        expect(palabra1.match(regex) !== null).toEqual(true);
    });

    it('Test#01: return type | Expecte: "array"', () => {
        const result = manufacture(['tren', 'oso', 'pelota'],'troesa');
        expect(typeof result).toEqual('object');
        expect(Array.isArray(result)).toEqual(true);
    });

    it('Test#02: manufacture(["tren", "oso", "pelota"], "tronesa") | Expecte: ["tren", "oso"]', () => {
        const gifts = ['tren', 'oso', 'pelota'];
        const materials = 'tronesa';
        const result = manufacture(gifts, materials); // ["tren", "oso"]

        expect(result).toEqual(["tren", "oso"]);
    });

    it('Test#03: manufacture(["coche", "muñeca", "balon"], "ocmuñalb") | Expected: []', () => {
        const gifts = ["coche", "muñeca", "balon"];
        const materials = "ocmuñalb";
        const result = manufacture(gifts, materials); // []

        expect(result).toEqual([]);
    });

    it("Test#04: manufacture(['patineta', 'robot', 'libro'], 'nopor') | Expected: []", () => {
        const gifts = ['patineta', 'robot', 'libro'];
        const materials = 'nopor';
        const result = manufacture(gifts, materials); // []

        expect(result).toEqual([]);
    });

    it("Test#05: manufacture([], 'letras') | Expected: []", () => {
        const gifts = [];
        const materials = 'letras';
        const result = manufacture(gifts, materials); // []

        expect(result).toEqual([]);
    });
    
    
    it("Test#06: manufacture(['juego', 'puzzle'], 'jlepuz') | Expected: ['puzzle']", () => {
        const gifts = ['juego', 'puzzle'];
        const materials = 'jlepuz';

        const result = manufacture(gifts, materials); // ["puzzle"]

        expect(result).toEqual(["puzzle"]);

    });

    it("Test#07: manufacture(['libro', 'ps5'], 'psli') | Expected: []", () => {
        const gifts = ['libro', 'ps5'];
        const materials = 'psli';

        const result = manufacture(gifts, materials) // []

        expect(result).toEqual([]);

    })

    

});