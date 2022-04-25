function solution(lottos, win_nums) {
  const miss = win_nums.filter((v) => !lottos.includes(v));
  let answer = [];
  let tempResult = [];
  let best = 0;
  let worst = 0;

  worst = 6 - lottos.filter((v) => v === 0 || !win_nums.includes(v)).length;

  best = lottos
    .map((v) => {
      if (v === 0 && miss.length) return miss.pop();
      else return v;
    })
    .filter((n) => win_nums.includes(n)).length;

  tempResult.push(best);
  tempResult.push(worst);

  answer = tempResult.map((v) => {
    if (v === 6) return 1;
    if (v === 5) return 2;
    if (v === 4) return 3;
    if (v === 3) return 4;
    if (v === 2) return 5;
    else return 6;
  });

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
