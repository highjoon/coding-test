let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [R, C] = input[0].split(" ").map(Number);
  input = input.slice(1);
  let words = new Set();
  let answer = "";

  for (let row = 0; row < R; row++) {
    let word = "";
    for (let col = 0; col < C; col++) {
      if (input[row][col] === "#") {
        if (word.length >= 2) words.add(word);
        word = "";
      } else {
        word += input[row][col];
      }
    }
    if (word.length >= 2) words.add(word);
  }

  for (let col = 0; col < C; col++) {
    let word = "";
    for (let row = 0; row < R; row++) {
      if (input[row][col] === "#") {
        if (word.length >= 2) words.add(word);
        word = "";
      } else {
        word += input[row][col];
      }
    }
    if (word.length >= 2) words.add(word);
  }

  words = Array.from(words).sort();
  answer = words[0];
  return answer;
}

console.log(solution(input));
