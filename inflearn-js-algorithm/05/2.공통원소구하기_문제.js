function solution(N, arr1, M, arr2) {
  const answer = [];
  let lt = 0;
  let rt = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (lt !== N && rt !== M) {
    if (arr1[lt] === arr2[rt]) {
      answer.push(arr1[lt++]);
      rt++;
    } else if (arr1[lt] > arr2[rt]) {
      rt++;
    } else {
      lt++;
    }
  }

  return answer.join(" ");
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a.length, a, b.length, b));
