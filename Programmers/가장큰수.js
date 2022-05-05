function solution(numbers) {
  let answer = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  if (answer[0] === "0") return "0";
  return answer;
}

let n1 = [6, 10, 2];
let n2 = [3, 30, 34, 5, 9];

console.log(solution(n1));
console.log(solution(n2));
