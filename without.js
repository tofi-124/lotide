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


const without = function(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArray.push(arr1[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);