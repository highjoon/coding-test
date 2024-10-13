function solution(N, K, arr) {
  let lt = 0;
  let rt = K - 1;
  let sum = 0;
  let answer;

  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }
  answer = sum;

  while (rt !== N) {
    answer = Math.max(answer, sum);
    sum -= arr[lt++];
    sum += arr[++rt];
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(10, 3, a));
