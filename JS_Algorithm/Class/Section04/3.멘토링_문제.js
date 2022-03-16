function solution(N, M, arr) {
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) continue;
      const candidateMentor = i;
      const candidateMenti = j;
      let isPair = true;

      for (let test of arr) {
        const mentorRank = test.indexOf(candidateMentor);
        const mentiRank = test.indexOf(candidateMenti);
        if (mentorRank > mentiRank) {
          isPair = false;
          break;
        }
      }

      if (isPair) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));
