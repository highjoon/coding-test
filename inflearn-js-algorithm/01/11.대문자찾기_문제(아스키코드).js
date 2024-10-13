function solution(s) {
  let answer = 0;
  for (let x of s) {
    let tmp = x.charCodeAt();
    if (tmp >= 65 && tmp <= 90) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
