function solution(n, r) {
  let answer;
  let memoization = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  function DFS(n, r) {
    if (memoization[n][r] > 0) return memoization[n][r];
    if (n === r || r === 0) return 1;
    else return (memoization[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
