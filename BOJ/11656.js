let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  input = input.split("").reverse();
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    let temp = `${input[i]}`;
    for (let j = i - 1; j >= 0; j--) {
      temp += input[j];
    }
    answer.push(temp);
  }

  answer = answer.sort();
  return answer.join("\n");
}

console.log(solution(input));
