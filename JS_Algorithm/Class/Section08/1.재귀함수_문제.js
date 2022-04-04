function solution(n) {
  const answer = [];

  function DFS(num) {
    if (num === 0) return;
    DFS(num - 1);
    answer.push(num);
  }

  DFS(n);
  return answer.join(" ");
}

console.log(solution(3));
