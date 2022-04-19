let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map((v) => Number(v));

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
