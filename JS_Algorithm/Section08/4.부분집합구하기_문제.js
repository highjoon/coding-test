function solution(n) {
  const answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      const tmp = [];
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp.push(i);
      }
      answer.push(tmp.join(" "));
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer.join("\n");
}

console.log(solution(3));
