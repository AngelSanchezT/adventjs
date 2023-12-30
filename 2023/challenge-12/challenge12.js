function checkIsValidCopy(original, copy) {
  const CHARACTERS = "#+:. ";
  const NO_DEGRADE = "0123456789 ";
  const temp = original.toLowerCase();

  for (let i = 0; i < original.length; i++) {
    const isCharacterNoDegrade = NO_DEGRADE.includes(temp[i]);
    const isCharacterNoEquals = temp[i] !== copy[i];
    const isCharacterDegrade = CHARACTERS.includes(temp[i]);
    const isCharacterErrorCopy =
      CHARACTERS.indexOf(temp[i]) > CHARACTERS.indexOf(copy[i]);
    const isOriginalEqualsCopy = original[i] === copy[i];
    const isCopyDegrade = CHARACTERS.includes(copy[i]);

    if (isCharacterNoDegrade && isCharacterNoEquals) {
      return false;
    }

    if (isCharacterDegrade && isCharacterNoEquals && isCharacterErrorCopy) {
      return false;
    }

    if (!(isOriginalEqualsCopy || !isCharacterNoEquals || isCopyDegrade)) {
      return false;
    }
  }

  return true;
}

module.exports = checkIsValidCopy;
