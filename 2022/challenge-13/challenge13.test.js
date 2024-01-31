const getFilesToBackup = require('./challenge13');

describe("Reto #13: Backup de los archivos de Papá Noel", () => {

    it("Test #01: return type", () => {
        const lastBackup = 1546300800
        const changes = [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
        ]
        expect(typeof getFilesToBackup(lastBackup, changes)).toEqual("object");
    });

    it("Test #02: getFilesToBackup ", () => {
        const lastBackup = 1546300800
        const changes = [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
        ]

        const expected = [1, 3];

        expect(getFilesToBackup(lastBackup, changes)).toEqual(expected);
    });

    it("Test #03: getFilesToBackup ", () => {
        const lastBackup = 1546300600
        const changes = [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ]
        const expected = [1, 2, 3];

        expect(getFilesToBackup(lastBackup, changes)).toEqual(expected);
    });

    it("Test #04: getFilesToBackup ", () => {
        const lastBackup = 1556300600
        const changes = [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ]
        const expected = [];

        expect(getFilesToBackup(lastBackup, changes)).toEqual(expected);
    });

    it("Test #04: getFilesToBackup ", () => {
        const lastBackup = 1556300600
        const changes = []
        const expected = [];

        expect(getFilesToBackup(lastBackup, changes)).toEqual(expected);
    });
});
