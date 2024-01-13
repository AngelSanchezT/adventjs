function findBalancedSegment(message) {
  let maxLen = 0;
  let startIndex = -1;
  let currentIndex = -1;
  let countZeros = 0;
  let countOnes = 0;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === 0) {
      countZeros++;
    } else {
      countOnes++;
    }

    if (countZeros === countOnes && countZeros + countOnes > maxLen) {
      maxLen = countZeros + countOnes;
      startIndex = currentIndex + 1;
    } else if (countZeros === countOnes) {
      currentIndex = i;
      countZeros = 0;
      countOnes = 0;
    }
  }

  return maxLen > 0 ? [startIndex, startIndex + maxLen - 1] : [];
}


module.exports = findBalancedSegment;