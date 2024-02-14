const checkSledJump = require('./challenge15');

describe("Reto 15: El salto perfecto", () => {
    it("Test #01: return type", () => {
        expect(typeof checkSledJump([1, 2, 3])).toEqual("boolean");
    });
});

const _ = function (e) {
    var r = [
        [e([1, 2, 3]), !1, "[1, 2, 3] s\xf3lo va para arriba..."], 
        [e([1, 2, 3, 2, 1]), !0, "[1, 2, 3, 2, 1] s\xed ser\xeda correcto"], 
        [e([0, 1, 0]), !0, "[0, 1, 0] ser\xeda correcto"], 
        [e([2, 4, 4, 6, 2]), !1, "[2, 4, 4, 6, 2] no ser\xeda correcto porque se queda dos veces en la altura 4..."], 
        [e([0, 3, 2, 1]), !0, "[0, 3, 2, 1] ser\xeda correcto... al final sube de golpe a 3 y luego baja..."], 
        [e([0, 1e3, 1]), !0, "[0, 1000, 1] ser\xeda correcto... crece y baja estrictamente"], 
        [e([0, 0, 0]), !1, "Si se queda siempre en el suelo y no despega... imposible que sea correcto."], 
        [e([6, 5, 4, 5, 6, 7]), !1, "Si baja, luego sube y luego baja... \xa1no es correcto!"], 
        [e([1, 2, 3, 4, 3, 2, 1, 2, 3]), !1, "Si sube, luego baja y luego sube... \xa1no es correcto!"]
    ].find((function (e) {
        return !1 === (0,
            just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
    }
    ));
    return {
        error: r ? r[2] : null
    }
}