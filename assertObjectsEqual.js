const eqArrays = function(arr1, arr2) {
  let i;
  let flag = [];

  if (arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        flag.push(true);
      } else flag.push(false);
    }
  } else return false;

  if (flag.includes(false)) {
    return false;
  } else {
    return true;
  }
};

const eqObjects = function(obj1, obj2) {
  let flag = [];
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let keys in obj1) {
      if (Array.isArray(obj1[keys]) === true) {
        flag.push(eqArrays(obj1[keys], obj2[keys]));
      } else {
        if (obj1[keys] === obj2[keys]) {
          {
            flag.push(true);
          }
        }
      }
    }
  } else return false;
  console.log(flag);
  if (flag.includes(false)) {
    return false;
  } else {
    return true;
  }
};

const assertObjectsEqual = function(obj1, obj2) {
  // Implement me!
  const inspect = require("util").inspect;
  let chk = eqObjects(obj1, obj2);

  if (chk === true) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`
    );
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd1 = { c: "1", d: ["2", 3, 4] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 2, 4] };
assertObjectsEqual(cd, cd2); // => false
assertObjectsEqual(cd1, cd2); // => true
assertObjectsEqual(cd3, cd2); // => false
