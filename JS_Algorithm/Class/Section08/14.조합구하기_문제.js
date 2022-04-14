function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, start) {
    if (L === m) {
      answer.push(tmp.slice().join(" "));
    } else {
      for (let i = start; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
  answer.push(answer.length);
  return answer.join("\n");
}

console.log(solution(4, 2));
