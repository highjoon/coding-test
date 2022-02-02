// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = [
  "13",
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
  "im",
  "yours",
];

const N = Number(input.shift());

input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);
});

const set = new Set(input);

console.log(Array.from(set).join("\n"));
