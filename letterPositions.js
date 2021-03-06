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


const letterPositions = function(sentence) {
  const results = {};
  let str = sentence.split("");
  for (let i = 0; i < str.length; i++) {
    if (!Array.isArray(results[str[i]])) {
      results[str[i]] = [];
      results[str[i]].push(i);
    } else results[str[i]].push(i);
  }

  return results;
};

//Test
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lhl").l, [0,2]);