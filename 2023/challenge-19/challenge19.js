function revealSabotage(store) {
  const numRows = store.length;
  const numCols = store[0].length;

  const isInsideBounds = (row, col) =>
    row >= 0 && row < numRows && col >= 0 && col < numCols;

  const countAdjacentSabotages = (row, col) => {
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (isInsideBounds(i, j) && store[i][j] === "*") {
          count++;
        }
      }
    }

    return count;
  };

  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      if (store[i][j] === "*") {
        row.push("*");
      } else {
        const sabotageCount = countAdjacentSabotages(i, j);
        row.push(sabotageCount === 0 ? " " : sabotageCount.toString());
      }
    }
    result.push(row);
  }

  return result;
}

// Ejemplo de uso:
const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Debería mostrar:
  [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
  ]
  */

module.exports = revealSabotage;
