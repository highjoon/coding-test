function solution(N, stages) {
  stages.sort((a, b) => a - b);

  let answer;
  let count = 0;
  let rate = [];
  let len = stages.length;

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] > i) break;
      if (stages[j] === i) count++;
    }
    rate.push([i, count / len]);
    len -= count;
    count = 0;
  }

  rate = rate.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });

  answer = rate.map((v) => Number(v[0]));

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
