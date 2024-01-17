function wrapping(gifts) {
    const ENVELOPE = '*'
    return gifts.map((gift) => {
        let wrapper = ENVELOPE.repeat(gift.length + 2);
        return `${wrapper}\n*${gift}*\n${wrapper}`;
    });
}
module.exports = wrapping;