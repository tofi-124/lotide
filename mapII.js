const map = function(objs) {
  let z = Math.sqrt(Math.pow(objs.x, 2) + Math.pow(objs.y, 2));
  return z;
};

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
];

const result = input.map((inp) => map(inp));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);