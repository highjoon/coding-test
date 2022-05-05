function solution(n) {
  let answer = 0;
  let nBinary = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  for (let i = n + 1; i <= 1000000; i++) {
    let nextBinary = i
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;
    if (nBinary !== nextBinary) continue;
    answer = i;
    break;
  }
  return answer;
}

console.log(solution(78));
console.log(solution(15));
