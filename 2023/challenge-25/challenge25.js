function travelDistance(map) {
  const lines = map.split("\n");
  const grid = lines.map((line) => line.split(""));

  function findPosition(target) {
    for (let i = 0; i < lines.length; i++) {
      const row = grid[i];
      const col = row.indexOf(target);
      if (col !== -1) {
        return { row: i, col };
      }
    }
  }

  function calculateDistance(start, end) {
    return Math.abs(start.row - end.row) + Math.abs(start.col - end.col);
  }

  let totalDistance = 0;
  let currentPosition = findPosition("S");

  for (let i = 1; i <= 9; i++) {
    const targetPosition = findPosition(i.toString());

    if (targetPosition) {
      totalDistance += calculateDistance(currentPosition, targetPosition);
      currentPosition = targetPosition;
    }
  }

  return totalDistance;
}

// Example usage:
const map = `.....1....
..S.......
..........
....3.....
......2...`;

const result = travelDistance(map);
console.log(result); // -> 12 km

const result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2

module.exports = travelDistance;
