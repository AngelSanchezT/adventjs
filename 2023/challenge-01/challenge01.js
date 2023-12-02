function findFirstRepeated(gifts) {
    const stock = new Map();

    for (const gitftId of gifts) {

        if (stock.has(gitftId)) {

            return gitftId;
        }

        stock.set(gitftId, 1);
    }

    return -1;
}

module.exports = findFirstRepeated;