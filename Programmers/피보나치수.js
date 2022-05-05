function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[0] = 0;
  dy[1] = 1;
  for (let i = 2; i < dy.length; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2]) % 1234567;
  }
  const answer = dy[n];
  return answer;
}

console.log(solution(3));
console.log(solution(5));
