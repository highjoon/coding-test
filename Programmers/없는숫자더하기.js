function solution(numbers) {
  let answer = 0;
  const original = Array.from({ length: 10 }, (v, i) => i);
  for (let num of original) {
    if (!numbers.includes(num)) {
      answer += num;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
