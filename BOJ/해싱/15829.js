let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const L = Number(input.shift());
const str = input.shift();
let hash = 0;
let pow = 1;

for (let i = 0; i < L; i++) {
  hash += (str.charCodeAt(i) - 96) * pow;
  hash %= 1234567891;
  pow *= 31;
  pow %= 1234567891;
}

console.log(hash);
