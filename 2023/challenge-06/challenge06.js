function maxDistance(movements) {
    const RIGHT = '>';
    const LEFT = '<';
    const MOVE = '*';

    let moveRight = movements.split(RIGHT).length - 1;
    let moveLeft = movements.split(LEFT).length - 1;
    let move = movements.split(MOVE).length - 1;

    return  Math.abs(moveRight - moveLeft) + move;
}

module.exports = maxDistance;