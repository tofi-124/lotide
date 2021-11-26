const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findkey = function (objs, callback) {
  for (let obj in objs) {
    if (callback(objs[obj])) {
      return obj;
    }
  }
};

assertEqual(
  findkey(
    {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => "noma"

assertEqual(
  findkey(
    {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 },
    },
    (x) => x.stars === 1
  ),
  "Blue Hill"
); // => "Blue Hill"

assertEqual(
  findkey(
    {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 4 },
      "Akelarre": { stars: 3 },
    },
    (x) => x.stars === 4
  ),
  "Ora"
); // => "Ora"
