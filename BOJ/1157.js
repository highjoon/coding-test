let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let sh = new Map();
let count = 0;

for (let str of input) {
  const upperCase = str.toUpperCase();
  if (sh.has(upperCase)) {
    sh.set(upperCase, sh.get(upperCase) + 1);
  } else {
    sh.set(upperCase, 1);
  }
}

let max = Math.max(...sh.values());
let maxVal = null;

for (let [key, val] of sh) {
  if (val === max) {
    count++;
    maxVal = key;
  }
}

count > 1 ? console.log("?") : console.log(maxVal);
