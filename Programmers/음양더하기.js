function solution(absolutes, signs) {
  let answer = [];
  const n = absolutes.length;
  let realNum = 0;

  for (let i = 0; i < n; i++) {
    realNum = signs[i] ? absolutes[i] : absolutes[i] * -1;
    answer.push(realNum);
  }

  answer = answer.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
