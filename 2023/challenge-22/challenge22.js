function compile(code) {
  let counter = 0;
  let returnPoints = [];
  let conditionalDepth = 0;

  for (let i = 0; i < code.length; i++) {
    const instruction = code[i];

    switch (instruction) {
      case "+":
        counter += 1;
        break;
      case "*":
        counter *= 2;
        break;
      case "-":
        counter -= 1;
        break;
      case "%":
        returnPoints.push(i);
        break;
      case "<":
        i = returnPoints.pop() - 1;
        break;
      case "¿":
        if (counter > 0) {
          conditionalDepth++;
          returnPoints.push(i);
        } else {
          let depth = 1;
          while (depth > 0) {
            i++;
            if (code[i] === "¿") {
              depth++;
            } else if (code[i] === "?") {
              depth--;
            }
          }
        }
        break;
      case "?":
        if (conditionalDepth > 0) {
          i = returnPoints.pop() - 1;
          conditionalDepth--;
        }
        break;
    }
  }

  return counter;
}

// Example usage:
console.log(compile("++*-")); // 3
console.log(compile("++%++<")); // 6
console.log(compile("++<--")); // 0
console.log(compile("++¿+?")); // 3
console.log(compile("--¿+++?")); // -2

module.exports = compile;
