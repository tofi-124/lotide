const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  let chk = eqArrays(arr1, arr2);

  if (chk === true) {
    console.log(`💯💯💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function (arr) {
  let i, j;
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      for (j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
