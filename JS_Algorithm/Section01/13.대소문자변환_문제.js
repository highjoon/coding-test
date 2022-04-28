function solution(s) {
  let answer = "";
  for (let x of s) {
    let asc = x.charCodeAt();
    if (asc >= 97 && asc <= 122) {
      answer += String.fromCharCode(asc - 32);
    } else {
      answer += String.fromCharCode(asc + 32);
    }
  }
  return answer;
}

console.log(solution("StuDY"));
