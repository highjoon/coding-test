function solution(n, f) {
  let answer;
  let flag = false;
  let memoization = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);
  let permutation = Array.from({ length: n }, () => 0);
  let beforehand = Array.from({ length: n }, () => 0);

  function combination(n, r) {
    if (memoization[n][r] > 0) return memoization[n][r];
    if (n === r || r === 0) return 1;
    else
      return (memoization[n][r] =
        combination(n - 1, r - 1) + combination(n - 1, r));
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = permutation.slice();
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          permutation[L] = i;
          DFS(L + 1, sum + beforehand[L] * permutation[L]);
          check[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    beforehand[i] = combination(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
