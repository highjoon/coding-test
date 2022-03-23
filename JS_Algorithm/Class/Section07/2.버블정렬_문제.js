function solution(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] > answer[j + 1]) {
        [answer[j + 1], answer[j]] = [answer[j], answer[j + 1]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
