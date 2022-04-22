let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input.shift());
let answer = [];
let p;
let n;
let arr;
let isError = false;
let isRotate = false;

while (input.length) {
  p = input.shift().split("");
  n = Number(input.shift());
  arr = JSON.parse(input.shift());
  isError = false;
  isRotate = false;

  for (let order of p) {
    if (order === "R") {
      isRotate = !isRotate;
    } else {
      if (!arr.length) {
        answer.push("error");
        isError = true;
        break;
      } else {
        if (isRotate) arr.pop();
        else arr.shift();
      }
    }
  }

  isRotate ? (arr = arr.reverse()) : "";
  isError ? "" : answer.push(JSON.stringify(arr));
}

console.log(answer.join("\n"));
