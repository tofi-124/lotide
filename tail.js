const tail = function (tailOfarray) {
  let retailOFarray = [];
  let i;
  for (i = 1; i < tailOfarray.length; i++) {
    retailOFarray[i - 1] = tailOfarray[i];
  }

  return retailOFarray;
};

module.exports = tail;


