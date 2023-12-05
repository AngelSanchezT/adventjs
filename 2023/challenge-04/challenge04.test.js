const decode = require('./challenge04');

describe("# Challenge #4: 😵‍💫 Turn the parentheses around", () => {

    it("Test#01: return type | Expect: string", () => {
        const result = decode('hola (odnum)')
        console.log(result) // hola mundo

        expect(typeof result).toBe('string');
    });

    it("Test#02: decode('hola (odnum)') | Expect: hola mundo", () => {
        const result = decode('hola (odnum)')
        console.log(result) // hola mundo

        expect(result).toBe('hola mundo');
    });

    it("Test#03: decode('(olleh) (dlrow)!') | Expect: 'hello world!'", () => {
        const result = decode('(olleh) (dlrow)!')
        console.log(result) // hello world!

        expect(result).toBe('hello world!');
    });

    it("Test#04: decode('sa(u(cla)atn)s') | Expect: 'santaclaus'", () => {
        const result = decode('sa(u(cla)atn)s')
        console.log(result) // santaclaus

        expect(result).toBe('santaclaus');
    });

    it("Test#05: decode('((nta)(sa))') | Expect: 'santa'", () => {
        const result = decode('((nta)(sa))')
        console.log(result) // santa

        expect(result).toBe('santa');
    });
});