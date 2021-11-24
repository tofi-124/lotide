const eqArrays = function(arr1, arr2) {
  let i;
  let flag = true;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false;
    }
  }
  return flag;
};

const assertArraysEqual = function(arr1, arr2) {
  let chk = eqArrays(arr1, arr2);

  if (chk === true) {
    console.log(`💯💯💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {
  let i,j;
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

console.log(flatten([1, 2, [3, 4], 5, [6]]));
