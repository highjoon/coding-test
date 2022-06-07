let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  input.pop();
  const answer = [];

  const isSurprising = (word) => {
    answer.push(`${word} is surprising.`);
  };

  const isNotSurprising = (word) => {
    answer.push(`${word} is NOT surprising.`);
  };

  for (let word of input) {
    let flag = true;

    for (let i = 1; i <= word.length - 1; i++) {
      let set = new Set();

      for (let j = 0; j < word.length - i; j++) {
        const temp = word[j] + word[j + i];
        if (set.has(temp)) {
          flag = false;
          break;
        }
        set.add(temp);
      }
      if (!flag) break;
    }
    flag ? isSurprising(word) : isNotSurprising(word);
  }

  return answer.join("\n");
}

console.log(solution(input));
