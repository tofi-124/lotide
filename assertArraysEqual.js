const assertArraysEqual = function(arr1, arr2) {
  let i;
  let flag = true;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false;
    }
  }

  if (flag === true) {
    console.log(`💯💯💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
