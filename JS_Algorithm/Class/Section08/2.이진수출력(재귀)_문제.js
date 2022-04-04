function solution(n) {
  const answer = [];

  function DFS(num) {
    if (num === 0) return;
    DFS(parseInt(num / 2));
    answer.push(num % 2);
  }

  DFS(n);
  return answer.join("");
}

console.log(solution(11));
