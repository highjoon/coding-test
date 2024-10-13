function solution(N, M, arr) {
  let answer = 0;
  let lt = 0;
  let rt = 0;
  let sum = arr[lt];

  while (lt !== N && rt !== N) {
    if (sum === M) answer++;
    if (sum <= M) sum += arr[++rt];
    else if (sum > M) sum -= arr[lt++];
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, 6, a));
let a1 = [1, 1, 1, 1, 1];
console.log(solution(5, 3, a1));
let a2 = [1, 1, 1];
console.log(solution(3, 2, a2));
