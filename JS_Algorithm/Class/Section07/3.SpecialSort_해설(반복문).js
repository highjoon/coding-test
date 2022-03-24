function solution(arr) {
  let answer = [];
  arr.forEach((x) => {
    if (x < 0) answer.push(x);
  });
  arr.forEach((x) => {
    if (x > 0) answer.push(x);
  });
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
