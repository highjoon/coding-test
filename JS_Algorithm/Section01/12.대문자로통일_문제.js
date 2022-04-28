function solution(s) {
  let answer = "";
  for (let x of s) {
    answer += x.toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
