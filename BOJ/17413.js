let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

function solution(input) {
  let answer = "";
  let temp = [];
  let isBraket = false;

  for (let i = 0; i < input.length; i++) {
    let word = input[i];
    if (word === "<") {
      if (temp.length) {
        temp = temp
          .join("")
          .split(" ")
          .map((v) => v.split("").reverse().join(""))
          .join(" ");
        answer += temp;
        temp = [];
      }
      isBraket = true;
      answer += word;
    } else if (word === ">") {
      isBraket = false;
      answer += word;
    } else if (isBraket) {
      answer += word;
    } else {
      temp.push(word);
    }
  }
  if (temp.length) {
    temp = temp
      .join("")
      .split(" ")
      .map((v) => v.split("").reverse().join(""))
      .join(" ");
    answer += temp;
  }
  return answer;
}

console.log(solution(input));
