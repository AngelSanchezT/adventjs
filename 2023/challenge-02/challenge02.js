function manufacture(gifts, materials) {

    return gifts.filter((gift) => {
        // Crear una expresión regular que busca cada caracter de materials
        const regex = new RegExp(`[${materials}]`, 'g');

        const letters = gift.match(regex);

        return letters.join('') === gift;
    });


}

module.exports = manufacture;