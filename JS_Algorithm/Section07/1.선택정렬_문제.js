function solution(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[lowest] > answer[j]) lowest = j;
    }
    if (lowest !== i) [answer[i], answer[lowest]] = [answer[lowest], answer[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
