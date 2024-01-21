function getMaxGifts(giftsCities, maxGifts, maxCities) {

    //console.table(giftsCities);
    giftsCities.sort((a, b) => b - a);
    //console.table(giftsCities);
    const initialValue = 0;
    let citiesVisit = 0;
    let freeGifts = 0;
    let accumulatorGifts = 0;
    const citiesVisitArray = [];


    for (let i = 0; i <= giftsCities.length; i++) {

        freeGifts = maxGifts - accumulatorGifts;
        let currentValue = giftsCities[i];
        let tempArray = giftsCities.slice(i);
        tempArray.shift();
        let c = 0;
        let d = tempArray.length;
        if(tempArray.length > 0) {
            c = tempArray.reduce( (a, b) => a + b);
        }

        if (currentValue <= freeGifts && citiesVisit <= maxCities) {
            

            if(c === freeGifts && currentValue < c) {
                // console.log(currentValue, c, citiesVisit, maxCities, freeGifts, d);
            } else {
                citiesVisitArray.push(currentValue);
                accumulatorGifts += currentValue;
                citiesVisit++;
            }

        }
    }

    // console.table(citiesVisitArray);
    return accumulatorGifts;


}


console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))// 20
console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)); // 115

module.exports = getMaxGifts;