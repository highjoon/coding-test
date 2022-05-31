let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  input = input.reverse();
  const answer = [];

  while (input.length) {
    let a = input.pop();
    let b = input.pop();
    let charA = new Map();
    let charB = new Map();
    let sorted = [];
    let result = "";

    for (let x of a) {
      if (charA.has(x)) charA.set(x, charA.get(x) + 1);
      else charA.set(x, 1);
    }

    for (let x of b) {
      if (charB.has(x)) charB.set(x, charB.get(x) + 1);
      else charB.set(x, 1);
    }

    for (let [key, val] of charA) {
      if (charB.has(key)) sorted.push(key);
    }

    sorted = sorted.sort();

    for (let char of sorted) {
      result += char.repeat(Math.min(charA.get(char), charB.get(char)));
    }

    answer.push(result);
  }

  return answer.join("\n");
}

console.log(solution(input));
