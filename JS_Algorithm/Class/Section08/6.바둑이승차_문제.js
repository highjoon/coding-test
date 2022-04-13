function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length - 1;
  function DFS(v, sum) {
    if (sum > c) return;
    if (v === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(v + 1, sum + arr[v + 1]);
      DFS(v + 1, sum);
    }
  }
  DFS(0, arr[0]);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
