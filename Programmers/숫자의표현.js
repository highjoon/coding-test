function solution(n) {
  let answer = 0;

  function DFS(num, sum) {
    if (sum > n) return 0;
    if (sum === n) return 1;
    else return DFS(num + 1, sum + num);
  }

  for (let i = 1; i <= n; i++) {
    answer += DFS(i, 0);
  }

  return answer;
}

console.log(solution(15));
