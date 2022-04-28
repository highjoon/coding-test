function solution(N, M, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  arr = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < N; i++) {
    let sum = 0;
    let cnt = 0;
    for (let j = 0; j < N; j++) {
      let product = arr[j][0];
      let delivery = arr[j][1];
      if (i === j) product /= 2;
      if (sum + product + delivery <= M) {
        sum += product + delivery;
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(5, 28, arr)); // 4
console.log(
  solution(20, 596, [
    [6, 331],
    [4, 251],
    [8, 675],
    [5, 214],
    [10, 735],
    [5, 996],
    [9, 609],
    [9, 371],
    [8, 377],
    [5, 707],
    [7, 907],
    [6, 433],
    [9, 737],
    [8, 796],
    [4, 265],
    [3, 484],
    [8, 488],
    [8, 191],
    [9, 232],
    [4, 195],
  ])
); // 2
