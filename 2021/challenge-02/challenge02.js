function listGifts(letter) {
    
    const words = letter.split(' ');
    const gifts = new Map();

    for(let word of words) {
        if(word && word.trim().length > 0 && word[0] !== '_') {
            console.log(word);
            if(gifts.has(word)) {
                gifts.set(word,gifts.get(word) + 1);
            } else {
                gifts.set(word,1);
            }
        }
    }


    return Object.fromEntries(gifts);
}

module.exports = listGifts;