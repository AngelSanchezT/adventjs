function organizeChristmasDinner(dishes) {
  const ingredientCount = new Map();

  // Count the occurrences of each ingredient
  for (const dish of dishes) {
    const dishName = dish[0];
    const ingredients = dish.slice(1);

    for (const ingredient of ingredients) {
      if (!ingredientCount.has(ingredient)) {
        ingredientCount.set(ingredient, new Set());
      }
      ingredientCount.get(ingredient).add(dishName);
    }
  }

  // Filter ingredients that appear in at least 2 dishes
  const repeatedIngredients = [...ingredientCount.entries()]
    .filter(([ingredient, dishesSet]) => dishesSet.size >= 2)
    .map(([ingredient]) => ingredient);

  // Sort ingredients alphabetically
  repeatedIngredients.sort();

  // Organize the dishes for each repeated ingredient
  const result = [];
  for (const ingredient of repeatedIngredients) {
    const dishesSet = ingredientCount.get(ingredient);
    const dishesArray = [...dishesSet].sort();
    result.push([ingredient, ...dishesArray]);
  }

  return result;
}

// Example usage:
const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));

module.exports = organizeChristmasDinner;
