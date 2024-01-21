function fitsInOneBox(boxes) {

    const compareBoxesVolumen = (a, b) => {
        const volumenA = a.l * a.w * a.h;
        const volumenB = b.l * b.w * b.h;

        return volumenA - volumenB;
    };

    boxes.sort(compareBoxesVolumen);

    let validateBoxes = true;

    boxes.reduce(

        (boxA, boxB) => {
            if (boxA.l >= boxB.l
                || boxA.w >= boxB.w
                || boxA.h >= boxB.h) {
                validateBoxes = false;
            }

            return boxB;
        }

    );

    return validateBoxes;

}

const result = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 }
])

console.log(result);

module.exports = fitsInOneBox;