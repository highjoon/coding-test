const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((num) => parseInt(num));

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const answer = [x, y, w - x, h - y];

console.log(Math.min(...answer));
