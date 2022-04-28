function solution(N, K, arr) {
  let answer;
  const set = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        set.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  const sortedArr = Array.from(set).sort((a, b) => b - a);
  answer = sortedArr[K - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
