function organizeGifts(gifts) {
  const numberGiftsRegex = /(\d+)/g;
  const typeGiftsRegex = /(\D+)/g;
  let result = "";

  let numberGifts = gifts.match(numberGiftsRegex);
  let typeGifts = gifts.match(typeGiftsRegex);

  for (let i = 0; i < typeGifts.length; i++) {
    let numberGiftTemp = numberGifts[i];
    // 1 pallet = 5 boxes = 50 gifts
    let numPallets = Math.trunc(numberGiftTemp / 50);
    result += `[${typeGifts[i]}]`.repeat(numPallets);
    numberGiftTemp -= numPallets * 50;

    // 1 box = 10 gifts
    let numBoxes = Math.trunc(numberGiftTemp / 10);
    result += `{${typeGifts[i]}}`.repeat(numBoxes);
    numberGiftTemp -= numBoxes * 10;

   // gifts
   result += numberGiftTemp > 0 ? `(${typeGifts[i].repeat(numberGiftTemp)})` : '';
  }

  return result;
}

module.exports = organizeGifts;
