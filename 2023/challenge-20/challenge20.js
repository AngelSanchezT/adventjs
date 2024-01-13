function distributeGifts(weights) {
  const numRows = weights.length;
  const numCols = weights[0].length;

  const getNeighborValues = (row, col) => {
    const neighbors = [];
    if (row > 0) neighbors.push(weights[row - 1][col]);
    if (row < numRows - 1) neighbors.push(weights[row + 1][col]);
    if (col > 0) neighbors.push(weights[row][col - 1]);
    if (col < numCols - 1) neighbors.push(weights[row][col + 1]);
    return neighbors.filter(value => value !== null);
  };

  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const neighbors = getNeighborValues(i, j);
      if (weights[i][j] === null) {
        // Calculate average for null position
        const average = neighbors.length > 0 ? 
          neighbors.reduce(
              (sum, val) => sum + val, 0
              ) / neighbors.length : 0;
        row.push(Math.round(average));
      } else {
        // Calculate average for non-null position
        const average = (
            weights[i][j] + (neighbors.length > 0 
                ? neighbors.reduce(
                    (sum, val) => sum + val, 0) : 0)) 
                    / (neighbors.length + 1);
        row.push(Math.round(average));
      }
    }
    result.push(row);
  }

  return result;
}

// Example usage:
const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
];


module.exports = distributeGifts;