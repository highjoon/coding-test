let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let answer = 0;

for (let word of input) {
  let temp = "";
  let isGroupWord = true;
  const endWords = [];

  for (let str of word) {
    if (str != temp) {
      if (endWords.includes(str)) {
        isGroupWord = false;
        break;
      } else {
        temp = str;
        endWords.push(str);
      }
    } else {
      continue;
    }
  }

  if (isGroupWord) {
    answer++;
  }
}

console.log(answer);
