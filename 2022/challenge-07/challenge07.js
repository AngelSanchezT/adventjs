function getGiftsToRefill(a1, a2, a3) {
    let inventory = new Set([a1, a2, a3].flat());
    let refill = [];

    inventory.forEach((gift) => {
        let sum = a1.includes(gift) + a2.includes(gift) + a3.includes(gift);
        console.log(sum);
        if (sum === 1) {
            refill.push(gift);
        }
    });

    return refill;
}

module.exports = getGiftsToRefill;