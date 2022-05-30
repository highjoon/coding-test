let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  input = input.split("");
  if (input[0] !== "q" || input[input.length - 1] !== "k") return -1;
  if (input.length % 5 !== 0) return -1;

  const quack = "quack";
  let visited = Array.from({ length: input.length }, () => false);
  let idx = 0;
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "q" && !visited[i]) {
      let isSameDuck = false;
      for (let j = i; j < input.length; j++) {
        if (input[j] === quack[idx] && !visited[j]) {
          idx++;
          visited[j] = true;
        }
        if (idx === 5) {
          if (isSameDuck === false) {
            answer++;
            isSameDuck = true;
          }
          idx = 0;
          continue;
        }
      }
    }
  }

  for (let v of visited) {
    if (v === false) return -1;
  }
  return answer > 0 ? answer : -1;
}

console.log(solution(input));
