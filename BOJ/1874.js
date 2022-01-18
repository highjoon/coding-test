let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let cases = input[0];
let arr = [];
let stack = [];
let answer = "";

for (let i = 0; i < cases; i++) {
  arr[i] = i + 1;
}

for (let j = 1; j <= cases; j++) {
  let count = 1;
  while (count <= cases && stack[stack.length - 1] != input[j]) {
    stack.push(arr.shift());
    answer += "+\n";
    count++;
  }
  if (stack[stack.length - 1] == input[j]) {
    stack.pop();
    answer += "-\n";
  } else {
    answer = "NO";
    break;
  }
}
console.log(answer);
