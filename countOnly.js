const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(arrs, obj) {
  const results = {};
  for (const arr of arrs) {
    if (obj[arr]) {
      if (results[arr]) {
        results[arr] += 1;
      } else {
        results[arr] = 1;
      }
    }
  }
  return results;
};

///Test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
