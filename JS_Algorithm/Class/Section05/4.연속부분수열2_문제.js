function solution(N, M, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < N; rt++) {
    sum += arr[rt];
    while (sum > M) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, 5, a));
