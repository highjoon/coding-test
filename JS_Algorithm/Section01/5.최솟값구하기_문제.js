function solution(arr) {
  let answer = Math.min(...arr);
  return answer;
}

let arr = [5, 7, 12, 3, 2, 9, 11];
// let arr=[5, 3, 7, 11, 1, 15, 17];
console.log(solution(arr));
