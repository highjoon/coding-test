function solution(n) {
  const answer = [];
  function DFS(n) {
    if (n > 7) return;
    DFS(n * 2);
    DFS(n * 2 + 1);
    answer.push(n);
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
