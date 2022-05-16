let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  input = input.slice(1);
  let hash = new Map();
  const answer = [];

  for (let file of input) {
    const extensionIdx = file.split("").findIndex((v) => v === ".");
    const extension = file.slice(extensionIdx + 1);
    if (hash.has(extension)) hash.set(extension, hash.get(extension) + 1);
    else hash.set(extension, 1);
  }

  for (let [key, val] of [...hash.entries()].sort()) {
    answer.push(`${key} ${val}`);
  }

  return answer.join("\n");
}

console.log(solution(input));
