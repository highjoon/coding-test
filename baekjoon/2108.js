let fs = require("fs");
let input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((num) => parseInt(num));

const N = Number(input.shift());
const sortedNumArr = input.sort((a, b) => Number(a) - Number(b));

const avg = Math.round(sortedNumArr.reduce((a, b) => a + b, 0) / N);
const mid = sortedNumArr[parseInt(sortedNumArr.length / 2)];
let min;
const range = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

let sh = new Map();

for (let x of sortedNumArr.reverse()) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
}

let maxNum = Math.max(...Array.from(sh.values()));
const temp = [];
for (let [key, value] of sh) {
    if (value === maxNum) temp.push(key);
}
temp.sort((a, b) => a - b);
if (temp.length > 1) min = temp[1];
else min = temp[0];

console.log(avg === -0 ? 0 : avg);
console.log(mid);
console.log(min);
console.log(range);
