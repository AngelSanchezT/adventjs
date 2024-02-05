function isValid(letter) {
    // ¡No dejes que el Grinch gane!

    if (letter.indexOf("{") > 0 || letter.indexOf("[") > 0) {
        return false;
    }

    let count = 0;
    let position = letter.indexOf("(");
    let positionEnd = -1;

    while (position !== -1) {
        count++;
        positionEnd = letter.indexOf(")", positionEnd + 1);

        const validate = letter.substring(position + 1, positionEnd);

        if (validate.includes("(") || validate.length === 0) {
            return false;
        }

        position = letter.indexOf("(", position + 1);

    }
    return true;
}

module.exports = isValid;