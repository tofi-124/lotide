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

const middle = function(midOfarray) {
  let remidOfarray = [];
  if (midOfarray.length > 2 && midOfarray.length % 2 !== 0) {
    remidOfarray.push(midOfarray[midOfarray.length / 2 - 0.5]);
  } else if (midOfarray.length > 2 && midOfarray.length % 2 === 0) {
    remidOfarray.push(midOfarray[midOfarray.length / 2 - 1]);
    remidOfarray.push(midOfarray[midOfarray.length / 2]);
  }
  return remidOfarray;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([2]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
