function solution(s) {
  let answer = s;
  answer = answer.replace(/A/gi, "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
