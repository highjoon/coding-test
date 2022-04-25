function solution(answers) {
  let answer = [];
  let max = 0;
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (student1[i % student1.length] === answers[i]) score1++;
    if (student2[i % student2.length] === answers[i]) score2++;
    if (student3[i % student3.length] === answers[i]) score3++;
  }

  max = Math.max(score1, score2, score3);

  if (score1 === max) answer.push(1);
  if (score2 === max) answer.push(2);
  if (score3 === max) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], [1]));
console.log(solution([1, 3, 2, 4, 2], [1, 2, 3]));
