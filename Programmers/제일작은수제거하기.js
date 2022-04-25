function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((x) => x !== min);
  if (!answer.length) {
    answer.push(-1);
  }
  return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
