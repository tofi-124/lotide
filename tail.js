const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(tailOfarray) {
  let retailOFarray = [];
  let i;
  for (i = 1; i < tailOfarray.length; i++) {
    retailOFarray[i - 1] = tailOfarray[i];
  }

  return retailOFarray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"