function count(distance, stable) {
  let count = 1;
  let current = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - current >= distance) {
      current = stable[i];
      count++;
    }
  }
  return count;
}

function solution(m, stable) {
  stable.sort((a, b) => a - b);
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...stable);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid, stable) >= m) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
