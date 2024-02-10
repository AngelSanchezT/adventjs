const wrapGifts = require('./challenge13');

describe("Reto #13: Envuelve regalos con asteriscos", () => {

    it("Test #01: return type", () => {
        expect(typeof wrapGifts(["\ud83d\udcf7", "\u26bd\ufe0f"])).toEqual("object");
    });

    it("Test #02: ['\ud83d\udcf7', '\u26bd\ufe0f'] ser\xeda as\xed ['****', '*\ud83d\udcf7*', '*\u26bd\ufe0f*', '****']", () => {
        const result = wrapGifts(["\ud83d\udcf7", "\u26bd\ufe0f"]);
        const expected = ["****", "*\ud83d\udcf7*", "*\u26bd\ufe0f*", "****"];
        expect(result).toEqual(expected);
    });

    it("Test #03: Si solo es un \ud83c\udfc0 deber\xeda ser ['****', '*\ud83c\udfc0*', '****']", () => {
        const result = wrapGifts(["\ud83c\udfc0"]);
        const expected = ["****", "*\ud83c\udfc0*", "****"];
        expect(result).toEqual(expected);
    });

    it("Test #04: ['\ud83c\udfc8\ud83c\udfb8', '\ud83c\udfae\ud83e\uddf8'] no lo est\xe1s envolviendo bien...", () => {
        const result = wrapGifts(["\ud83c\udfc8\ud83c\udfb8", "\ud83c\udfae\ud83e\uddf8"]);
        const expected = ["******", "*\ud83c\udfc8\ud83c\udfb8*", "*\ud83c\udfae\ud83e\uddf8*", "******"];
        expect(result).toEqual(expected);
    });

    it("Test #05: ['\ud83c\udfc8\ud83c\udfb8'] no lo est\xe1s envolviendo bien.", () => {
        const result = wrapGifts(["\ud83c\udfc8\ud83c\udfb8"]);
        const expected = ["******", "*\ud83c\udfc8\ud83c\udfb8*", "******"];
        expect(result).toEqual(expected);
    });



});

const _ = function (e) {
    var r = [
        [e(["\ud83d\udcf7", "\u26bd\ufe0f"]), ["****", "*\ud83d\udcf7*", "*\u26bd\ufe0f*", "****"], "['\ud83d\udcf7', '\u26bd\ufe0f'] ser\xeda as\xed ['****', '*\ud83d\udcf7*', '*\u26bd\ufe0f*', '****']"],
        [e(["\ud83c\udfc0"]), ["****", "*\ud83c\udfc0*", "****"], "Si solo es un \ud83c\udfc0 deber\xeda ser ['****', '*\ud83c\udfc0*', '****']"],
        [e(["\ud83c\udfc8\ud83c\udfb8", "\ud83c\udfae\ud83e\uddf8"]), ["******", "*\ud83c\udfc8\ud83c\udfb8*", "*\ud83c\udfae\ud83e\uddf8*", "******"], "['\ud83c\udfc8\ud83c\udfb8', '\ud83c\udfae\ud83e\uddf8'] no lo est\xe1s envolviendo bien..."],
        [e(["\ud83c\udfc8\ud83c\udfb8"]), ["******", "*\ud83c\udfc8\ud83c\udfb8*", "******"], "['\ud83c\udfc8\ud83c\udfb8'] no lo est\xe1s envolviendo bien."]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
    return {
        error: r ? r[2] : null
    }
}