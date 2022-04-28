function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let x = [-1, 0, 1, 0];
  let y = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < x.length; k++) {
        let dx = i + x[k];
        let dy = j + y[k];
        if (
          dx >= 0 &&
          dx < n &&
          dy >= 0 &&
          dy < n &&
          arr[dx][dy] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
