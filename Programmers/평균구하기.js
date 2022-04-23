function solution(arr) {
  let answer;
  let sum = arr.reduce((a, b) => a + b, 0);
  answer = sum / arr.length;
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
