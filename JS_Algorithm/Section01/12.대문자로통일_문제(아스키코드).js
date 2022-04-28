function solution(s) {
  let answer = "";
  for (let x of s) {
    let tmp = x.charCodeAt();
    if (tmp >= 97 && tmp <= 122) {
      answer += String.fromCharCode(tmp - 32);
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
