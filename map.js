const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

const eqArrays = function(arr1, arr2) {
  let i;
  let flag = [];

  if (arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        flag.push(true);
      } else flag.push(false);
    }
  } else flag.push(false);

  if (flag.includes(false)) {
    return false;
  } else return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let chk = eqArrays(arr1, arr2);

  if (chk === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const testAsq = ["ox", "mother", "lamb", "tom", "apple"];
const testAsq1 = map(testAsq, (ElementsOfTaq) => ElementsOfTaq[0]);
assertArraysEqual(testAsq1, [ 'o', 'm', 'l', 't', 'a' ]);

const testAsqa = ["right", "wrong", "left", "up"];
const testAsq1a = map(testAsqa, (ElementsOfTaqa) => ElementsOfTaqa[0]);
assertArraysEqual(testAsq1a, [ 'r', 'w', 'l', 'u' ]);

const testAsqb = ["pure", "dog", "came"];
const testAsq1b = map(testAsqb, (ElementsOfTaqb) => ElementsOfTaqb[0]);
assertArraysEqual(testAsq1b, [ 'p', 'q', 'c' ]);