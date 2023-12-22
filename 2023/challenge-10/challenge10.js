function createChristmasTree(ornaments, height) {
  const ESPACE = " ";
  const ENTER = "\n";
  const BASE = "|";
  const ornamentsList = ornaments.repeat(height * 3).split("");
  let tree = "";

  let totalOrnament = ornamentsList.join(ESPACE);

  tree += ESPACE.repeat(height - 1) + totalOrnament.substring(0, 1) + ENTER;
  let numOrnaments = 1;
  let positionI = 0;
  let positionF = 0;

  for (let i = 2; i <= height; i++) {
    positionI = numOrnaments * 2;
    positionF = (numOrnaments + i) * 2 - 1;

    tree += ESPACE.repeat(height - i);
    tree += totalOrnament.substring(positionI, positionF);
    tree += ENTER;

    numOrnaments += i;
  }

  tree += ESPACE.repeat(height - 1) + BASE + ENTER;

  return tree;
}

module.exports = createChristmasTree;
