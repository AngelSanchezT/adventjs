function getIndexsForPalindrome(word) {
  let wordArray = word.split("");
  let word2 = [...wordArray].reverse().join("");

  if (word === word2) {
    return [];
  }

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = i; j < wordArray.length; j++) {
      let wordArrayTemp = [...wordArray];
      let letterTemp = wordArrayTemp[i];
      wordArrayTemp[i] = wordArrayTemp[j];
      wordArrayTemp[j] = letterTemp;

      if (wordArrayTemp.join("") === wordArrayTemp.reverse().join("")) {
        return [i, j];
      }
    }
  }

  return null;
}

module.exports = getIndexsForPalindrome;
