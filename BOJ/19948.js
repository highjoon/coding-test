let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const poet = input[0];
  let space = Number(input[1]);
  let alpha = input[2].split(" ").map(Number);
  let last = "";
  let answer = "";

  for (let i = 0; i < poet.length; i++) {
    if (last === poet[i]) continue;
    last = poet[i];
    if (poet[i] === " ") {
      if (space === 0) return -1;
      space--;
    } else {
      const idx = poet[i].toLowerCase().charCodeAt(0) - 97;
      if (alpha[idx] === 0) return -1;
      alpha[idx] -= 1;
    }
    if (i === 0 || poet[i - 1] === " ") {
      answer += poet[i].toUpperCase();
      const idx = poet[i].toLowerCase().charCodeAt(0) - 97;
      if (alpha[idx] === 0) return -1;
      alpha[idx] -= 1;
    }
  }

  return answer;
}

console.log(solution(input));
