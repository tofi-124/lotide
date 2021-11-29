const middle = function (midOfarray) {
  let remidOfarray = [];
  if (midOfarray.length > 2 && midOfarray.length % 2 !== 0) {
    remidOfarray.push(midOfarray[midOfarray.length / 2 - 0.5]);
  } else if (midOfarray.length > 2 && midOfarray.length % 2 === 0) {
    remidOfarray.push(midOfarray[midOfarray.length / 2 - 1]);
    remidOfarray.push(midOfarray[midOfarray.length / 2]);
  }
  return remidOfarray;
};

console.log(typeof(middle([1,2,3])))
console.log(middle([1,2,3]))

module.exports = middle;
