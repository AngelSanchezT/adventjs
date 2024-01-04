const organizeChristmasDinner = require("./challenge23");

describe("Challenge #23: 🍽️ Christmas dinner", () => {
  it("Test #01: return type", () => {
    const result = organizeChristmasDinner([
      ["christmas turkey", "turkey", "sauce", "herbs"],
      ["cake", "flour", "sugar", "egg"],
      ["hot chocolate", "chocolate", "milk", "sugar"],
      ["pizza", "sauce", "tomato", "cheese", "ham"],
    ]);

    expect(typeof result).toEqual("object");
  });

  it('Test #02: organizeChristmasDinner([["christmas turkey", "turkey", "sauce", "herbs"],["cake", "flour", "sugar", "egg"],["hot chocolate", "chocolate", "milk", "sugar"],["pizza", "sauce", "tomato", "cheese", "ham"]])', () => {
    const result = organizeChristmasDinner([
      ["christmas turkey", "turkey", "sauce", "herbs"],
      ["cake", "flour", "sugar", "egg"],
      ["hot chocolate", "chocolate", "milk", "sugar"],
      ["pizza", "sauce", "tomato", "cheese", "ham"],
    ]);

    const expected = [
      ["sauce", "christmas turkey", "pizza"],
      ["sugar", "cake", "hot chocolate"],
    ];

    expect(result).toEqual(expected);
  });

  it('Test #03: organizeChristmasDinner([["fruit salad", "apple", "banana", "orange"],["berry smoothie", "blueberry", "banana", "milk"],["apple pie", "apple", "sugar", "flour"]])', () => {
    const result = organizeChristmasDinner([
      ["fruit salad", "apple", "banana", "orange"],
      ["berry smoothie", "blueberry", "banana", "milk"],
      ["apple pie", "apple", "sugar", "flour"],
    ]);

    const expected = [
      ["apple", "apple pie", "fruit salad"],
      ["banana", "berry smoothie", "fruit salad"],
    ];

    expect(result).toEqual(expected);
  });

  it('Test #04: organizeChristmasDinner([["gingerbread", "flour", "ginger", "sugar"],["glazed ham", "ham", "honey", "sugar", "vinegar"],["roast chicken", "chicken", "rosemary", "thyme", "garlic"],["vegetable soup", "carrot", "potato", "onion", "garlic"],["fruit punch", "apple juice", "orange juice", "sugar"]])', () => {
    const result = organizeChristmasDinner([
      ["gingerbread", "flour", "ginger", "sugar"],
      ["glazed ham", "ham", "honey", "sugar", "vinegar"],
      ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
      ["vegetable soup", "carrot", "potato", "onion", "garlic"],
      ["fruit punch", "apple juice", "orange juice", "sugar"],
    ]);

    const expected = [
      ["garlic", "roast chicken", "vegetable soup"],
      ["sugar", "fruit punch", "gingerbread", "glazed ham"],
    ];

    expect(result).toEqual(expected);
  });

  it('Test #05: organizeChristmasDinner([["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],["mashed potatoes", "potatoes", "butter", "milk"],["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]])', () => {
    const result = organizeChristmasDinner([
      ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
      ["mashed potatoes", "potatoes", "butter", "milk"],
      ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
      ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"],
    ]);

    const expected = [
      ["butter", "cinnamon rolls", "mashed potatoes", "turkey stuffing"],
      ["cinnamon", "cinnamon rolls", "pumpkin pie"],
      ["flour", "cinnamon rolls", "pumpkin pie"],
      ["sugar", "cinnamon rolls", "pumpkin pie"],
    ];

    expect(result).toEqual(expected);
  });

  it('Test #06: organizeChristmasDinner([["chicken alfredo", "chicken", "pasta", "parmesan"],["parmesan chicken", "chicken", "parmesan", "bread crumbs"],["pasta salad", "pasta", "olive oil", "tomato"],["tomato soup", "tomato", "basil", "cream"]])', () => {
    const result = organizeChristmasDinner([
      ["chicken alfredo", "chicken", "pasta", "parmesan"],
      ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
      ["pasta salad", "pasta", "olive oil", "tomato"],
      ["tomato soup", "tomato", "basil", "cream"],
    ]);

    const expected = [
      ["chicken", "chicken alfredo", "parmesan chicken"],
      ["parmesan", "chicken alfredo", "parmesan chicken"],
      ["pasta", "chicken alfredo", "pasta salad"],
      ["tomato", "pasta salad", "tomato soup"],
    ];

    expect(result).toEqual(expected);
  });

  it('Test #07: organizeChristmasDinner([["snowflake cookies", "flour", "sugar", "vanilla"],["winter stew", "beef", "carrots", "potatoes"],["holiday punch", "cranberry juice", "orange juice", "sparkling water"],["festive salad", "lettuce", "cranberries", "walnuts"]])', () => {
    const result = organizeChristmasDinner([
      ["snowflake cookies", "flour", "sugar", "vanilla"],
      ["winter stew", "beef", "carrots", "potatoes"],
      ["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
      ["festive salad", "lettuce", "cranberries", "walnuts"]
    ]);

    const expected = [];

    expect(result).toEqual(expected);
  });
});
