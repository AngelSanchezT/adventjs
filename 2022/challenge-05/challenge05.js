function getMaxGifts(giftsCities, maxGifts, maxCities) {

    giftsCities.sort((a, b) => b - a);
  
    return giftsCities.reduce((total, num) => {
      if (!maxCities || total + num > maxGifts || total + num === maxGifts - 1) {
        return total;
      }
  
      maxCities -= 1;
      return (total += num);
  
    }, 0);
  }


console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))// 20
console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)); // 115

module.exports = getMaxGifts;