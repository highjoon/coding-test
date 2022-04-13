function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  function DFS(v, sum) {
    if (flag) return;
    if (v === arr.length) {
      if (total - sum === sum) {
        flag = 1;
        answer = "YES";
      }
    } else {
      DFS(v + 1, sum + arr[v + 1]);
      DFS(v + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
