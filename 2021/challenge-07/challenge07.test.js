const contains = require('./challenge07');

describe("Reto 07: Buscando en el almacén...", () => {

    it("Test #01: return type", () => {
        const almacen = {
            'estanteria1': {
                'cajon1': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                    'producto1': 'pantalones',
                    'producto2': 'camiseta' // <- ¡Está aquí!
                }
            }
        }

        expect(typeof contains(almacen, 'camiseta')).toEqual("boolean") // true

    });

    it("Test #02: \xa1No has encontrado una camiseta en el almac\xe9n...!", () => {
        const almacen = {
            'estanteria1': {
                'cajon1': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                    'producto1': 'pantalones',
                    'producto2': 'camiseta' // <- ¡Está aquí!
                }
            }
        }

        expect(contains(almacen, 'camiseta')).toEqual(true) // true

    });


    it("Test #03: \xa1La gameboy no est\xe1 en el ba\xfal!", () => {
        const almacen = {
            baul: {
                fondo: {
                    objeto: "cd-rom",
                    "otro-objeto": "disquette",
                    "otra-cosa": "mando"
                }
            }
        }

        expect(contains(almacen, "gameboy")).toEqual(false) // false

    });

    it("Test #04: Por peque\xf1o que sea el almac\xe9n, debes encontrar el producto...", () => {
        const almacen = {
            a: "b"
        }

        expect(contains(almacen, "b")).toEqual(true) // true

    });

    it("Test #05: \xbfPodr\xedas encontrar algo en un almac\xe9n vac\xedo?", () => {
        const almacen = {}

        expect(contains(almacen, "b")).toEqual(true) // true

    });

    it("Test #06: Hay almacenes profundos pero deber\xedas encontrarlo igualmente...", () => {
        const almacen = {
            a: {
                b: {
                    c: {
                        d: {
                            e: "f"
                        }
                    }
                }
            }
        }

        expect(contains(almacen, "f")).toEqual(true) // true

    });

    it("Test #07: \xbfSeguro que est\xe1s mirando el producto exactamente?", () => {
        const almacen = {
            a: {
                b: {
                    c: {
                        d: {
                            e: "fa"
                        }
                    }
                }
            }
        }

        expect(contains(almacen, "f")).toEqual(false) // false

    });
});