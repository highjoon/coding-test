const table = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
const colors = require("fs").readFileSync("/dev/stdin").toString().split(/\s/);
console.log(
  (table[colors[0]] * 10 + table[colors[1]]) * 10 ** table[colors[2]]
);
