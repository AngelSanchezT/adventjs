function distributeGifts(packOfGifts, reindeers) {
    const allGifts = packOfGifts.join('').length;
    const allReindeers = reindeers.join('').length;

    return Math.trunc((allReindeers * 2) / allGifts);
}

module.exports = distributeGifts;