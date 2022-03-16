function solution(N, arr1, M, arr2) {
  const answer = [];
  let lt = 0;
  let rt = 0;

  while (lt !== N && rt !== M) {
    if (arr1[lt] <= arr2[rt]) {
      answer.push(arr1[lt++]);
    } else {
      answer.push(arr2[rt++]);
    }
  }

  while (lt !== N) answer.push(arr1[lt++]);
  while (rt !== M) answer.push(arr2[rt++]);

  return answer.join(" ");
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(3, a, 5, b));
