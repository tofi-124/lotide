const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let i;
  let flag = true;
  if (arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        flag = false;
      }
    }
  } else flag = false;

  return flag;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
