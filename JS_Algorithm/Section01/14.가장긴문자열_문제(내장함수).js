function solution(s) {
  let answer = "";
  let idxList = s.map((x) => x.length);
  let max = Math.max(...idxList);
  let idx = idxList.indexOf(max);
  answer += s[idx];
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
