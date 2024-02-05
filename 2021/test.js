var tests = {
    "01": function (e) {
        var r = [{
            name: "Noa",
            color: "azul"
        }, {
            name: "Euge",
            color: "rojo"
        }, {
            name: "Navidad",
            color: "rojo"
        }, {
            name: "Ki Na Ma",
            color: "rojo"
        }, {
            name: "Nnnnnn",
            color: "rojo"
        }, {
            name: "Aaa aaa",
            color: "rojo"
        }, {
            name: "na",
            color: "azul"
        }];
        return e(r).length > 2 ? {
            error: "Est\xe1s contando ovejas de m\xe1s..."
        } : e(r).length < 2 ? {
            error: "Est\xe1s contando ovejas de menos..."
        } : "Navidad" !== e(r)[0].name || "Ki Na Ma" !== e(r)[1].name ? {
            error: "\xa1No has devuelto las ovejas correctas..."
        } : {
            error: null
        }
    },
    "02": function (e) {
        var r = "bici coche bal\xf3n _playstation bici coche peluche";
        return "object" !== typeof e(r) || Array.isArray(e(r)) ? {
            error: "No devuelves un objeto..."
        } : '{"bici":2,"coche":2,"bal\xf3n":1,"peluche":1}' !== JSON.stringify(e(r)) ? {
            error: "No devuelves el objeto correcto..."
        } : '{"a":2,"m":1,"b":2,"c":2}' !== JSON.stringify(e("_bici _ a m __ b c a b c ")) ? {
            error: "Me parece que no has tenido en cuenta los espacios dobles en blanco...trim trim trim!"
        } : {
            error: null
        }
    },
    "03": function (e) {
        var r = "bici coche (bal\xf3n) bici coche peluche";
        return "boolean" !== typeof e(r) ? {
            error: "\xa1Necesito un valor booleano!"
        } : !0 !== e(r) || !0 !== e("(mu\xf1eca) consola bici") ? {
            error: '\xbfEst\xe1s seguro que "(mu\xf1eca) consola bici" no es v\xe1lido?'
        } : !1 !== e("bici (bal\xf3n bici coche") ? {
            error: '"bici (bal\xf3n bici coche" deber\xeda ser false...'
        } : !1 !== e("peluche (bici [coche) bici coche bal\xf3n") ? {
            error: '"peluche (bici [coche)" deber\xeda ser false...'
        } : !1 !== e("(peluche {) bici") ? {
            error: '"(peluche {) bici" deber\xeda ser false...'
        } : !1 !== e("() bici") ? {
            error: "\xbfHas mirado que los par\xe9ntesis vacios sean inv\xe1lidos?"
        } : !1 !== e("(()) bici") ? {
            error: '"(()) bici" deber\xeda ser inv\xe1lido'
        } : !1 !== e("(a() bici (a)") ? {
            error: '"(a() bici (a)" deber\xeda ser inv\xe1lido'
        } : !0 !== e("(a) (b) (c)") || !0 !== e("a (b) (ca) d") ? {
            error: "\xbfPensabas que ser\xeda tan f\xe1cil? (a) (b) (c)"
        } : !0 === e(")bici( casa play") ? {
            error: '\xbfEst\xe1s seguro que ")bici( casa play" es v\xe1lido?'
        } : {
            error: null
        }
    },
    "04": function (e) {
        if ("string" !== typeof e(25))
            return {
                error: "El \xe1rbol es un string"
            };
        if (e(25).endsWith("\n"))
            return {
                error: "El \xe1rbol no deber\xeda terminar con un salto de l\xednea..."
            };
        return "_*_\n***\n_#_\n_#_" !== e(2) ? {
            error: "\xa1No has hecho el \xe1rbol de dos niveles correctamente!"
        } : "__*__\n_***_\n*****\n__#__\n__#__" !== e(3) ? {
            error: "\xa1No has hecho el \xe1rbol de tres niveles correctamente!"
        } : "___*___\n__***__\n_*****_\n*******\n___#___\n___#___" !== e(4) ? {
            error: "\xa1No has hecho el \xe1rbol de cuatro niveles correctamente!"
        } : "*\n#\n#" !== e(1) ? {
            error: "Tambi\xe9n existe el \xe1rbol de un nivel y, s\xed, con tronco tambi\xe9n."
        } : {
            error: null
        }
    },
    "05": function (e) {
        var r = new Date("Dec 2, 2021")
            , a = new Date("Dec 23, 2021 00:00:01")
            , n = new Date("Dec 23, 2021 23:59:59")
            , o = new Date("December 21, 2021 03:24:00");
        if ("number" !== typeof e(r))
            return {
                error: "Debes devolver un n\xfamero"
            };
        if (23 !== e(r))
            return {
                error: "\xbfDel 2 de diciembre al 25 no van 23 d\xedas? \ud83e\udd14"
            };
        if (2 !== e(a))
            return {
                error: "Yo d\xedria que del 23 de diciembre al 25 van 2 d\xedas... \ud83d\ude31"
            };
        if (2 !== e(n))
            return {
                error: "Revisa que cuentas bien los d\xedas aunque sea a las 23:59:59 horas... \ud83d\ude1d"
            };
        if (4 !== e(o))
            return {
                error: "No me sale que el 21 de diciembre al 25 van 4 d\xedas... \ud83e\udd14"
            };
        var t = new Date("Dec 25, 2021")
            , l = new Date("Dec 26, 2021")
            , _ = new Date("Dec 30, 2021")
            , u = new Date("Jan 2, 2022 00:00:01")
            , i = new Date("Jan 2, 2022 23:59:59");
        return 0 !== e(t) ? {
            error: "Del 25 de diciembre al 25 de diciembre ser\xedan 0 d\xedas... \ud83c\udf85"
        } : -1 !== e(l) || -5 !== e(_) || -8 !== e(u) || -8 !== e(i) ? {
            error: "Deber\xedas devolver los d\xedas en negativo para fechas futuras... \ud83d\udd2e"
        } : {
            error: null
        }
    },
    "06": function (e) {
        var r = [[e([3, 5, 7, 2], 10), [3, 7], "[3, 5, 7, 2] y 10, deber\xeda ser [3, 7]"], [e([-3, -2, 7, -5], 10), null, "[-3, -2, 7, -5] y 10, deber\xeda ser null"], [e([2, 2, 3, 1], 4), [2, 2], "[2, 2, 3, 1] y 4, deber\xeda ser [2, 2]"], [e([6, 7, 1, 2], 8), [6, 2], "[6, 7, 1, 2] y 8, deber\xeda ser [6, 2]"], [e([0, 2, 2, 3, -1, 1, 5], 6), [1, 5], "[0, 2, 2, 3, -1, 1, 5] y 6, deber\xeda ser [1, 5]"], [e([0, 2, 3, -1, 4], 3), [0, 3], "\xbfSabes que el 0 tambi\xe9n existe, verdad? \ud83d\ude1d"]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    "07": function (e) {
        if (!0 !== e({
            estanteria1: {
                cajon1: {
                    producto1: "coca-cola",
                    producto2: "fanta",
                    producto3: "sprite"
                }
            },
            estanteria2: {
                cajon1: "vacio",
                cajon2: {
                    producto1: "pantalones",
                    producto2: "camiseta"
                }
            }
        }, "camiseta"))
            return {
                error: "\xa1No has encontrado una camiseta en el almac\xe9n...!"
            };
        return !1 !== e({
            baul: {
                fondo: {
                    objeto: "cd-rom",
                    "otro-objeto": "disquette",
                    "otra-cosa": "mando"
                }
            }
        }, "gameboy") ? {
            error: "\xa1La gameboy no est\xe1 en el ba\xfal!"
        } : !0 !== e({
            a: "b"
        }, "b") ? {
            error: "Por peque\xf1o que sea el almac\xe9n, debes encontrar el producto..."
        } : !1 !== e({}, "b") ? {
            error: "\xbfPodr\xedas encontrar algo en un almac\xe9n vac\xedo?"
        } : !0 !== e({
            a: {
                b: {
                    c: {
                        d: {
                            e: "f"
                        }
                    }
                }
            }
        }, "f") ? {
            error: "Hay almacenes profundos pero deber\xedas encontrarlo igualmente..."
        } : !1 !== e({
            a: {
                b: {
                    c: {
                        d: {
                            e: "fa"
                        }
                    }
                }
            }
        }, "f") ? {
            error: "\xbfSeguro que est\xe1s mirando el producto exactamente?"
        } : {
            error: null
        }
    },
    "08": function (e) {
        var r = [[e([39, 18, 29, 25, 34, 32, 5]), 16, "[39, 18, 29, 25, 34, 32, 5], deber\xeda ser 16"], [e([10, 20, 30, 40, 50, 60, 70]), 60, "[10, 20, 30, 40, 50, 60, 70] deber\xeda ser 60"], [e([1, 2, 3, 4]), 3, "[1, 2, 3, 4] deber\xeda ser 3"], [e([6, 5, 4, 3]), -1, "[6, 5, 4, 3] no tiene ganancias..."], [e([1, 1, 1]), -1, "[1, 1, 1] no tiene ganancias"]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    "09": function (e) {
        var r = [[e([6.1, 4.2, 6.3], Math.floor), {
            6: [6.1, 6.3],
            4: [4.2]
        }, "[6.1, 4.2, 6.3] con Math.floor deber\xeda ser { 6: [6.1, 6.3], 4: [4.2] }"], [e(["one", "two", "three"], "length"), {
            3: ["one", "two"],
            5: ["three"]
        }, "['one', 'two', 'three'] con 'length' deber\xeda ser { 3: ['one', 'two'], 5: ['three'] }"], [e([{
            age: 23
        }, {
            age: 24
        }], "age"), {
            23: [{
                age: 23
            }],
            24: [{
                age: 24
            }]
        }, "No est\xe1s agrupando bien el ejemplo de las edades"], [e([1397639141184, 13632237e5], (function (e) {
            return new Date(e).getFullYear()
        }
        )), {
            2013: [13632237e5],
            2014: [1397639141184]
        }, "No est\xe1s agrupando bien el ejemplo de las fechas"], [e([{
            title: "JavaScript: The Good Parts",
            rating: 8
        }, {
            title: "Aprendiendo Git",
            rating: 10
        }, {
            title: "Clean Code",
            rating: 9
        }], "rating"), {
            8: [{
                title: "JavaScript: The Good Parts",
                rating: 8
            }],
            9: [{
                title: "Clean Code",
                rating: 9
            }],
            10: [{
                title: "Aprendiendo Git",
                rating: 10
            }]
        }, "No est\xe1s agrupando bien el ejemplo de las calificaciones"], [e([], "length"), {}, "\xbfQu\xe9 pasa si no hay nada? Deber\xeda devolver un objeto vac\xedo..."]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    10: function (e) {
        var r = [[e(51), [1, 0, 0, 0, 0, 1], "Para devolver 51 necesitas una moneda de 1 c\xe9ntimo y otra de 50."], [e(3), [1, 1, 0, 0, 0, 0], "Para devolver 3, necesitas una moneda de 1 c\xe9ntimo y otra de 2."], [e(5), [0, 0, 1, 0, 0, 0], "Para devolver 5, s\xf3lo necesitas una moneda de 5 c\xe9ntimos"], [e(16), [1, 0, 1, 1, 0, 0], "Para devolver 16, necesitas una moneda de 1 c\xe9ntimo, otra de 5 y otra de 10."], [e(100), [0, 0, 0, 0, 0, 2], "Para devolver 100, necesitas dos monedas de 50 c\xe9ntimos"], [e(101), [1, 0, 0, 0, 0, 2], "\xbfQu\xe9 necesitas para devolver 101? Sigue siendo un cambio v\xe1lido..."], [e(111), [1, 0, 0, 1, 0, 2], "Tambi\xe9n queremos devolver 111 c\xe9ntimos... A la gente le gusta el cambio."], [e(138), [1, 1, 1, 1, 1, 2], "Tambi\xe9n queremos devolver 138 c\xe9ntimos... A la gente le gusta el cambio."]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    11: function (e) {
        var r = [[e(0), !1, "Si no vamos nunca al cine, seguro que no vale la pena la tarjeta fidelidad."], [e(1), !1, "Si s\xf3lo voy una vez, seguro que no me sale a cuenta la tarjeta fidelidad."], [e(2), !1, "Si voy a ver Spiderman y Matrix s\xf3lo, no vale la pena la tarjeta fidelidad."], [e(10), !1, "Aunque vaya 10 veces, no vale la pena la tarjeta fidelidad."], [e(20), !1, "Aunque vaya 20 veces, no vale la pena la tarjeta fidelidad."], [e(23), !1, "Todav\xeda no vale la pena la tarjeta fidelidad..."], [e(24), !0, "En alg\xfan momento debe valer la pena la tarjeta de fidelidad, no?"], [e(25), !0, "En alg\xfan momento debe valer la pena la tarjeta de fidelidad, no?"], [e(48), !0, "En alg\xfan momento debe valer la pena la tarjeta de fidelidad, no?"], [e(100), !0, "Si voy 100 veces al cine, seguro que sale a cuenta la tarjeta fidelidad"], [e(1e3), !0, "Si voy 1000 veces al cine, seguro que sale a cuenta la tarjeta fidelidad"]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    12: function (e) {
        var r = [[e([5, 3, 6, 7, 9]), 4, "[5, 3, 6, 7, 9] necesita un salto m\xednimo de 4."], [e([2, 4, 6, 8, 10]), 7, "[2, 4, 6, 8, 10] necesita un salto m\xednimo de 7."], [e([9, 5, 1]), 2, "[9, 5, 1] necesita un salto m\xednimo de 2."], [e([3, 7, 5]), 2, "[3, 7, 5] necesita un salto m\xednimo de 2."], [e([14, 10, 8, 2, 3, 6]), 9, "[14, 10, 8, 2, 3, 6] necesita un salto m\xednimo de 9"], [e([2, 5, 8, 11, 14, 3, 6, 9]), 10, "Por complicada que sea la ruta, siempre debe tener una forma de saltar obst\xe1culos"]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    13: function (e) {
        var r = [[e(["\ud83d\udcf7", "\u26bd\ufe0f"]), ["****", "*\ud83d\udcf7*", "*\u26bd\ufe0f*", "****"], "['\ud83d\udcf7', '\u26bd\ufe0f'] ser\xeda as\xed ['****', '*\ud83d\udcf7*', '*\u26bd\ufe0f*', '****']"], [e(["\ud83c\udfc0"]), ["****", "*\ud83c\udfc0*", "****"], "Si solo es un \ud83c\udfc0 deber\xeda ser ['****', '*\ud83c\udfc0*', '****']"], [e(["\ud83c\udfc8\ud83c\udfb8", "\ud83c\udfae\ud83e\uddf8"]), ["******", "*\ud83c\udfc8\ud83c\udfb8*", "*\ud83c\udfae\ud83e\uddf8*", "******"], "['\ud83c\udfc8\ud83c\udfb8', '\ud83c\udfae\ud83e\uddf8'] no lo est\xe1s envolviendo bien..."], [e(["\ud83c\udfc8\ud83c\udfb8"]), ["******", "*\ud83c\udfc8\ud83c\udfb8*", "******"], "['\ud83c\udfc8\ud83c\udfb8'] no lo est\xe1s envolviendo bien."]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    14: function (e) {
        var r = [[e([5, 6, 1, 2, 3, 7, 0]), 4, "[5, 6, 1, 2, 3, 7, 0] ser\xeda as\xed 4 el reno que se ha escapado"], [e([0, 1]), 2, "[0, 1] deber\xeda ser 2 el reno que falta"], [e([3, 0, 1]), 2, "[3, 0, 1] ser\xeda 2"], [e([9, 2, 3, 5, 6, 4, 7, 0, 1]), 8, "El caso de [9, 2, 3, 5, 6, 4, 7, 0, 1] no est\xe1 bien..."], [e([0]), 1, "El caso de [0] no est\xe1 bien..."], [e([1]), 0, "El caso de [1] no est\xe1 bien..."], [e([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23]), 20, "\xbfQu\xe9 pasa que si el n\xfamero de renos es muy grande no eres capaz de averiguarlo? :P"]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    15: function (e) {
        var r = [[e([1, 2, 3]), !1, "[1, 2, 3] s\xf3lo va para arriba..."], [e([1, 2, 3, 2, 1]), !0, "[1, 2, 3, 2, 1] s\xed ser\xeda correcto"], [e([0, 1, 0]), !0, "[0, 1, 0] ser\xeda correcto"], [e([2, 4, 4, 6, 2]), !1, "[2, 4, 4, 6, 2] no ser\xeda correcto porque se queda dos veces en la altura 4..."], [e([0, 3, 2, 1]), !0, "[0, 3, 2, 1] ser\xeda correcto... al final sube de golpe a 3 y luego baja..."], [e([0, 1e3, 1]), !0, "[0, 1000, 1] ser\xeda correcto... crece y baja estrictamente"], [e([0, 0, 0]), !1, "Si se queda siempre en el suelo y no despega... imposible que sea correcto."], [e([6, 5, 4, 5, 6, 7]), !1, "Si baja, luego sube y luego baja... \xa1no es correcto!"], [e([1, 2, 3, 4, 3, 2, 1, 2, 3]), !1, "Si sube, luego baja y luego sube... \xa1no es correcto!"]].find((function (e) {
            return !1 === (0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e[0], e[1])
        }
        ));
        return {
            error: r ? r[2] : null
        }
    },
    16: function (e) {
        return {
            error: [4 === e(".,"), 6 === e(",."), 8 === e(",..."), 49 === e(".;"), 5 === e("..,"), 95 === e("..,!"), 49 === e(".;!"), 300 === e("!!!"), 50 === e(";!"), 50 === e(";"), Number.isNaN(e(";.W")), 107 === e(".........!"), 100 === e(";!;"), 300 === e(";;;;!!"), Number.isNaN(e("midu"))].some((function (e) {
                return !1 === e
            }
            )) ? "No est\xe1s decodificando bien... \xa1Revisa los ejemplos!" : null
        }
    },
    17: function (e) {
        var r = [["dapelu", 5, ["midu", "jelowing"]], ["midu", 2, []], ["jelowing", 2, []]]
            , a = [["lolivier", 8, ["camila", "jesuspoleo"]], ["camila", 5, ["sergiomartinez", "conchaasensio"]], ["jesuspoleo", 4, []], ["sergiomartinez", 4, []], ["conchaasensio", 3, ["facundocapua", "faviola"]], ["facundocapua", 2, []], ["faviola", 1, []]]
            , n = [["a", 99, ["b"]], ["b", 1, ["c"]], ["c", 1, ["d"]], ["d", 1, []]];
        return {
            error: [9 === e(r, "dapelu"), 2 === e(r, "midu"), 2 === e(r, "jelowing"), 15 === e(a, "camila"), 4 === e(a, "jesuspoleo"), 6 === e(a, "conchaasensio"), 27 === e(a, "lolivier"), 102 === e(n, "a"), 3 === e(n, "b"), 2 === e(n, "c"), 1 === e(n, "d")].some((function (e) {
                return !1 === e
            }
            )) ? "No est\xe1s contando bien los paquetes... \xa1Revisa los ejemplos!" : null
        }
    },
    18: function (e) {
        return {
            error: [(0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(["photo", "postcard", "photo", "photo", "video"]), ["photo", "postcard", "photo(1)", "photo(2)", "video"]), (0,
                    just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(["file", "file", "file", "game", "game"]), ["file", "file(1)", "file(2)", "game", "game(1)"]), (0,
                        just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(["file", "file(1)", "icon", "icon(1)", "icon(1)"]), ["file", "file(1)", "icon", "icon(1)", "icon(1)(1)"]), (0,
                            just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(["a", "a", "aa", "a", "a", "a", "aa"]), ["a", "a(1)", "aa", "a(2)", "a(3)", "a(4)", "aa(1)"])].some((function (e) {
                                return !1 === e
                            }
                            )) ? "No est\xe1s gestionando bien los nombres duplicados... \xa1Rev\xedsalo!" : null
        }
    },
    19: function (e) {
        return {
            error: [(0,
                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(10, [2, 3, 8, 1, 4]), [0, 2]), (0,
                    just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(15, [2, 10, 4, 1]), [1, 2]), (0,
                        just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(25, [10, 15, 20, 5]), [0, 1]), (0,
                            just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(8, [8, 2, 1]), [1, 2]), (0,
                                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(8, [8, 2, 1, 4, 3]), [3, 4]), (0,
                                    just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(4, [10, 14, 20]), null), (0,
                                        just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(5, [5, 5, 5]), null), (0,
                                            just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(100, [101, 102, 103, 104, 105, 106, 107, 108, 109]), null), (0,
                                                just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(5, [2, 2, 2, 2, 2, 2, 3]), [0, 6]), (0,
                                                    just_compare__WEBPACK_IMPORTED_MODULE_1__.Z)(e(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5]), [9, 10])].some((function (e) {
                                                        return !1 === e
                                                    }
                                                    )) ? "No est\xe1s gestionando bien el tiempo... \xa1Rev\xedsalo!" : null
        }
    },
    20: function (e) {
        return {
            error: [!0 === e("Whisky bueno: \xa1excitad mi fr\xe1gil peque\xf1a vejez!"), !0 === e("Extra\xf1o pan de col y kiwi se quem\xf3 bajo fugaz vaho"), !0 === e("Jovencillo emponzo\xf1ado de whisky: \xa1qu\xe9 figurota exhibe!"), !1 === e("\xa1Qu\xe9 whisky! \xa1Qu\xe9 whisky! \xa1Qu\xe9 whisky!"), !1 === e("Esto es una frase larga pero no tiene todas las letras del abecedario"), !1 === e("De la a a la z, nos faltan letras"), !1 === e('!"\xb7$%&/()=?\xbf^*\xc7\xa8_:;.|@#\xa2\u221e\xac\xf7\u201c\u201d\u2260\xb4\u201aabcdefghijz'), !1 === e('!"\xb7$%&/()=?\xbf^*\xc7\xa8_:;.|@#\xa2\u221e\xac\xf7\u201c\u201d\u2260\xb4\u201aabcdefghij'), !1 === e("1a2a3a4a5a6a7a8a90a0bcdefghijz_:;,.-\xe7\xb4`+"), !1 === e("abcdefghijklmnopqrstuvwxyz"), !1 === e("abcdefg\xf1\xf1\xf1\xf1ijklmnopqrstuvwxyz")].some((function (e) {
                return !1 === e
            }
            )) ? "\xa1No pasan los tests! Revisa acentos, may\xfasculas y ojo con la \xf1 y los s\xedmbolos." : null
        }
    },
    21: function (e) {
        return {
            error: [!1 === e(4, [[2, 5, 8], [3, 6, 10]]), !0 === e(3, [[1, 1, 5], [2, 2, 10]]), !0 === e(3, [[2, 1, 5], [3, 5, 7]]), !0 === e(4, [[2, 3, 8], [2, 5, 7]]), !1 === e(1, [[2, 3, 8]]), !1 === e(2, [[1, 2, 4], [2, 3, 8]]), !1 === e(4, [[2, 1, 5], [3, 3, 7]]), !0 === e(5, [[2, 1, 5], [3, 3, 7]]), !0 === e(3, [[2, 1, 5], [3, 5, 7]]), !0 === e(11, [[3, 2, 7], [3, 7, 9], [8, 3, 9]]), !0 === e(9999, [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8]]), !1 === e(5, [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8]])].some((function (e) {
                return !1 === e
            }
            )) ? "\xa1No pasan los tests! Revisa bien los ejemplos y ten en cuenta que puede haber viajes con m\xe1s paradas de dos..." : null
        }
    },
    22: function (e) {
        return {
            error: [1 === e({
                value: 1,
                left: null,
                right: null
            }), 6 === e({
                value: 1,
                left: {
                    value: 2,
                    left: null,
                    right: null
                },
                right: {
                    value: 3,
                    left: null,
                    right: null
                }
            }), 28 === e({
                value: 1,
                left: {
                    value: 5,
                    left: {
                        value: 7,
                        left: {
                            value: 3,
                            left: null,
                            right: null
                        },
                        right: null
                    },
                    right: null
                },
                right: {
                    value: 6,
                    left: {
                        value: 5,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null
                    }
                }
            }), 52 === e({
                value: 1,
                left: {
                    value: 5,
                    left: {
                        value: 7,
                        left: {
                            value: 3,
                            left: null,
                            right: null
                        },
                        right: null
                    },
                    right: null
                },
                right: {
                    value: 6,
                    left: {
                        value: 5,
                        left: {
                            value: 7,
                            left: {
                                value: 3,
                                left: null,
                                right: null
                            },
                            right: null
                        },
                        right: null
                    },
                    right: {
                        value: 5,
                        left: {
                            value: 7,
                            left: {
                                value: 3,
                                left: null,
                                right: null
                            },
                            right: null
                        },
                        right: null
                    }
                }
            }), 16 === e({
                value: 1,
                left: {
                    value: 4,
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null
                    }
                },
                right: {
                    value: 5,
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null
                    }
                }
            })].some((function (e) {
                return !1 === e
            }
            )) ? "\xa1No pasan los tests! No vamos a poder decorar bien el \xe1rbol..." : null
        }
    },
    23: function (e) {
        return {
            error: [!0 === e("BAL", "LIB"), !1 === e("CON", "JUU"), !1 === e("MMM", "MID"), !1 === e("AA", "MID"), !1 === e("MID", "AA"), !1 === e("XBOX", "XXOB"), !0 === e("XBOX", "XOBX"), !0 === e("xxxMMM", "aaaDDD"), !0 === e("aaaDDDmmm", "aaaDDDmmm"), !1 === e("xxxqqqeeefffggg", "xxxqqqeeefffgg"), !0 === e("abcdefghijkl", "lkjihgfedcba")].some((function (e) {
                return !1 === e
            }
            )) ? "\xa1No pasan los tests! Revisa bien los ejemplos. Recuerda que debe mantener el orden!!!" : null
        }
    },
    24: function (e) {
        var r = {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 3,
                left: null,
                right: null
            }
        }
            , a = {
                value: 1,
                left: {
                    value: 5,
                    left: {
                        value: 7,
                        left: {
                            value: 3,
                            left: null,
                            right: null
                        },
                        right: null
                    },
                    right: null
                },
                right: {
                    value: 6,
                    left: {
                        value: 5,
                        left: {
                            value: 7,
                            left: {
                                value: 3,
                                left: null,
                                right: null
                            },
                            right: null
                        },
                        right: null
                    },
                    right: {
                        value: 5,
                        left: {
                            value: 7,
                            left: {
                                value: 3,
                                left: null,
                                right: null
                            },
                            right: null
                        },
                        right: null
                    }
                }
            }
            , n = {
                value: 1,
                left: {
                    value: 4,
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null
                    }
                },
                right: {
                    value: 5,
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null
                    }
                }
            }
            , o = {
                value: 1,
                right: {
                    value: 5,
                    right: {
                        value: 2,
                        left: null,
                        right: null
                    },
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    }
                },
                left: {
                    value: 4,
                    right: {
                        value: 2,
                        left: null,
                        right: null
                    },
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    }
                }
            };
        return {
            error: [!0 === e(r, r), !0 === e(r, {
                value: 1,
                right: {
                    value: 3,
                    left: null,
                    right: null
                },
                left: {
                    value: 2,
                    left: null,
                    right: null
                }
            }), !0 === e(n, n), !0 === e(a, a), !0 === e(n, o), !0 === e(o, n), !1 === e(r, {
                value: 1,
                left: {
                    value: 3,
                    left: null,
                    right: null
                },
                right: {
                    value: 5,
                    left: null,
                    right: null
                }
            }), !1 === e(r, {
                value: 1,
                left: {
                    value: 2,
                    left: {
                        value: 3,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 4,
                        left: null,
                        right: null
                    }
                },
                right: {
                    value: 5,
                    left: {
                        value: 6,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 7,
                        left: null,
                        right: null
                    }
                }
            }), !1 === e(r, o)].some((function (e) {
                return !1 === e
            }
            )) ? "\xa1No pasan los tests! Vamos a volver locos a los abuelos \ud83d\ude06" : null
        }
    },
    25: function (e) {
        var r = [[" ", " ", " "], [" ", " ", "m"], [" ", " ", "*"]]
            , a = [["*", " ", " ", " "], [" ", "m", "*", " "], [" ", " ", " ", " "], [" ", " ", " ", "*"]]
            , n = [["*", "m"]]
            , o = [["*", "*", "*"], ["*", "m", "*"], ["*", "*", "*"]]
            , t = [[" ", " ", " "], [" ", "m", " "], [" ", " ", " "]];
        return {
            error: [!1 === e("up", r), !0 === e("down", r), !1 === e("right", r), !1 === e("left", r), !1 === e("up", a), !1 === e("down", a), !0 === e("right", a), !1 === e("left", a), !1 === e("up", n), !1 === e("down", n), !1 === e("right", n), !0 === e("left", n), !0 === e("up", o), !0 === e("down", o), !0 === e("right", o), !0 === e("left", o), !1 === e("up", t), !1 === e("down", t), !1 === e("right", t), !1 === e("left", t)].some((function (e) {
                return !1 === e
            }
            )) ? "\xa1No pasan los tests! El ratoncillo se va a morir de hambre. \ud83e\udd72 " : null
        }
    }
};
