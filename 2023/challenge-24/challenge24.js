function getStaircasePaths(steps, maxJump) {
  const result = [];

  function generatePaths(currentPath, remainingSteps) {
    if (remainingSteps === 0) {
      result.push(currentPath.slice()); // Save a copy of the current path
      return;
    }

    for (let jump = 1; jump <= Math.min(maxJump, remainingSteps); jump++) {
      currentPath.push(jump);
      generatePaths(currentPath, remainingSteps - jump);
      currentPath.pop(); // Backtrack
    }
  }

  generatePaths([], steps);

  return result;
}

// Example usage:
console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/

module.exports = getStaircasePaths;