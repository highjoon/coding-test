let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  input = input.slice(1);
  const answer = [];
  const keys = new Set();

  for (let word of input) {
    let flag = false;
    word = word.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (!keys.has(word[i][0].toUpperCase())) {
        keys.add(word[i][0].toUpperCase());
        word[i] = `[${word[i][0]}]` + word[i].substring(1);
        answer.push(word.join(" "));
        flag = true;
        break;
      }
    }

    if (!flag) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
          if (!keys.has(word[i][j].toUpperCase())) {
            keys.add(word[i][j].toUpperCase());
            word[i] =
              word[i].substring(0, j) +
              `[${word[i][j]}]` +
              word[i].substring(j + 1);
            answer.push(word.join(" "));
            flag = true;
            break;
          }
        }
        if (flag) break;
      }
    }

    if (!flag) answer.push(word.join(" "));
  }

  return answer.join("\n");
}

console.log(solution(input));
