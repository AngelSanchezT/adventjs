const howManyReindeers = require('./challenge20');

describe("Reto #20: Más viajes retadores", () => {

    it("Test #01: return type", () => {

        const reindeerTypes = [
            { type: 'Nuclear', weightCapacity: 50 },
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
        ]

        const gifts = [
            { country: 'Spain', weight: 30 },
            { country: 'France', weight: 17 },
            { country: 'Italy', weight: 50 }
        ]

        const result = howManyReindeers(reindeerTypes, gifts);

        expect(typeof result).toEqual("object");
    });

    it("Test #02: howManyReindeers(reindeerTypes, gifts)", () => {

        const reindeerTypes = [
            { type: 'Nuclear', weightCapacity: 50 },
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
        ];

        const gifts = [
            { country: 'Spain', weight: 30 },
            { country: 'France', weight: 17 },
            { country: 'Italy', weight: 50 }
        ];

        const expected = [
            {
                "country": "Spain",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 1
                    },
                    {
                        "type": "Gasoline",
                        "num": 3
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            },
            {
                "country": "France",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 1
                    },
                    {
                        "type": "Gasoline",
                        "num": 1
                    },
                    {
                        "type": "Diesel",
                        "num": 2
                    }
                ]
            },
            {
                "country": "Italy",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 3
                    },
                    {
                        "type": "Gasoline",
                        "num": 3
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            }
        ];

        const result = howManyReindeers(reindeerTypes, gifts);

        expect(result).toEqual(expected);
    });

    it("Test #03: howManyReindeers(reindeerTypes, gifts)", () => {

        const reindeerTypes = [
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
        ];

        const gifts = [{ country: 'Spain', weight: 37 }];

        const expected = [
            {
                "country": "Spain",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 2
                    },
                    {
                        "type": "Gasoline",
                        "num": 2
                    },
                    {
                        "type": "Diesel",
                        "num": 7
                    }
                ]
            }
        ];

        const result = howManyReindeers(reindeerTypes, gifts);

        expect(result).toEqual(expected);
    });

    it("Test #04: howManyReindeers(reindeerTypes, gifts)", () => {

        const reindeerTypes = [
            { type: 'Nuclear', weightCapacity: 50 },
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
        ];

        const gifts = [
            { country: 'Spain', weight: 30 },
            { country: 'Germany', weight: 7 },
            { country: 'France', weight: 17 },
            { country: 'Italy', weight: 50 }
        ];

        const expected = [
            {
                "country": "Spain",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 1
                    },
                    {
                        "type": "Gasoline",
                        "num": 3
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            },
            {
                "country": "Germany",
                "reindeers": [
                    {
                        "type": "Gasoline",
                        "num": 1
                    },
                    {
                        "type": "Diesel",
                        "num": 2
                    }
                ]
            },
            {
                "country": "France",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 1
                    },
                    {
                        "type": "Gasoline",
                        "num": 1
                    },
                    {
                        "type": "Diesel",
                        "num": 2
                    }
                ]
            },
            {
                "country": "Italy",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 3
                    },
                    {
                        "type": "Gasoline",
                        "num": 3
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            }
        ];

        const result = howManyReindeers(reindeerTypes, gifts);

        expect(result).toEqual(expected);
    });

    it("Test #05: howManyReindeers(reindeerTypes, gifts)", () => {

        const reindeerTypes = [
            { type: 'Diesel', weightCapacity: 1 },
            { type: 'Gasoline', weightCapacity: 5 }
        ];

        const gifts = [
            { country: 'Spain', weight: 30 },
            { country: 'Germany', weight: 7 }
        ];

        const expected = [
            {
                "country": "Spain",
                "reindeers": [
                    {
                        "type": "Gasoline",
                        "num": 5
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            },
            {
                "country": "Germany",
                "reindeers": [
                    {
                        "type": "Gasoline",
                        "num": 1
                    },
                    {
                        "type": "Diesel",
                        "num": 2
                    }
                ]
            }
        ];

        const result = howManyReindeers(reindeerTypes, gifts);

        expect(result).toEqual(expected);
    });
});
