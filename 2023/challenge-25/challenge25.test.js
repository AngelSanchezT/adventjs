const travelDistance = require('./challenge25');

describe("Challenge #25: 🗺️ Calculating distances", () => {
    it("Test #01: return type", () => {
        expect(typeof travelDistance(
            `.....1....
            ..S.......
            ..........
            ....3.....
            ......2...`
            )).toEqual("number");
    });

    


});
/*
Tests failed
Test #01
Test: return type

Expected:
"number"

Actual:
"number"
Test #02
Test: travelDistance(
`.....1....
..S.......
..........
....3.....
......2...`
)

Expected:
12

Actual:
0
Test #03
Test: travelDistance(`..S.1...`)

Expected:
2

Actual:
0
Test #04
Test: travelDistance(
`.....2....
..S.......
..........
....1.....
......3...`
)

Expected:
13

Actual:
0
Test #05
Test: travelDistance(
`3....1....
..S.......
.........2
..........
......4...`
)

Expected:
31

Actual:
0
Test #06
Test: travelDistance(`S1`)

Expected:
1

Actual:
0
Test #07
Test: travelDistance(`1....S`)

Expected:
5

Actual:
0
Test #08
Test: travelDistance(`S12....3`)

Expected:
7

Actual:
0
Test #09 secret
Test #10 secret
Test #11 secret
Test #12 secret
*/