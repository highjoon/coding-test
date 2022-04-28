function solution(str) {
  let answer = 0;
  str = str.replace(/[^0-9]/gi, "");
  answer = Number(str);
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
