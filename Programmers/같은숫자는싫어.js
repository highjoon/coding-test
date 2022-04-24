function solution(arr) {
  const answer = [];
  for (let num of arr) {
    if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
