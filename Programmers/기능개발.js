function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] += speeds[i];
    }
    if (progresses[0] >= 100) {
      let completed = 0;
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        completed++;
      }
      answer.push(completed);
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([96, 99, 98, 97], [1, 1, 1, 1]));
