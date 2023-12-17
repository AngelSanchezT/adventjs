const drawGift = require('./challenge07');

describe("Challenge #7: 📦 The 3D boxes", () => {

    it("Test #01: return type | Expected: function ", () => {

    });

    it('Test #02: drawGift(4, "+")', () => {
        const result = drawGift(4, "+");
        const expected = "   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n";

        expect(result).toEqual(expected);
    });

    it('Test #03: drawGift(5, "*")', () => {
        const result = drawGift(5, "*");
        const expected = "    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n";

        expect(result).toEqual(expected);
    });

    it('Test #04: drawGift(1, "^")', () => {
        const result = drawGift(1, "^");
        const expected = "#\n";

        expect(result).toEqual(expected);
    });

    it('Test #05: drawGift(2, "&")', () => {
        const result = drawGift(2, "&");
        const expected = " ##\n###\n##\n";

        expect(result).toEqual(expected);
    });

    it('Test #06: drawGift(10, "%")', () => {
        const result = drawGift(10, "%");
        const expected = "         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n";
        expect(result).toEqual(expected);
    });

})