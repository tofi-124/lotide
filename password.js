const password =function (str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
    case "a":
      str[i] = 4;
      break;
    case "e":
      str[i] = 3;
      break;
    case "o":
      str[i] = 0;
      break;
    case "l":
      str[i] = 1;
      break;
    }
  }
  str = str.join("");
  return str;
}

const args = process.argv.slice(2);
args.forEach((element) => {
  console.log(password(element));
});
