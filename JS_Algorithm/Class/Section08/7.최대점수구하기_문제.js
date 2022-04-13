function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === ps.length - 1) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L + 1], time + pt[L + 1]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, ps[0], pt[0]);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
