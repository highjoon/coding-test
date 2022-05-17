let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  input = input.slice(1);
  const answer = [];
  const required = ["A", "B", "C", "D", "E", "F"];

  for (let x of input) {
    let flag = false;
    let word = Array.from(new Set(x));

    if (!required.includes(word[0]) || word.length > 5) {
      answer.push("Good");
      continue;
    }

    if (
      required.includes(word[0]) &&
      word[1] === "A" &&
      word[2] === "F" &&
      word[3] === "C"
    ) {
      if (!word[4] || required.includes(word[4])) {
        flag = true;
      }
    } else if (word[0] === "A" && word[1] === "F" && word[2] === "C") {
      if (!word[3] || required.includes(word[3])) {
        flag = true;
      }
    }

    answer.push(flag ? "Infected!" : "Good");
  }

  return answer.join("\n");
}

console.log(solution(input));
