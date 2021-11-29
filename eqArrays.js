
const eqArrays = function(arr1, arr2) {
  let i;
  let flag = [];
  
  if (arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        flag.push(true);
      } else return false;
    }
  } else return false;

  if (flag.includes(false)) {
    return false;
  } else return true;
};

module.exports = eqArrays;

