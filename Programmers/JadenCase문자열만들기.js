function solution(s) {
  let answer = [];
  s = s.split(" ");
  for (let x of s) {
    let temp = "";
    for (let i = 0; i < x.length; i++) {
      if (i === 0 && isNaN(x[i])) {
        temp += x[i].toUpperCase();
        continue;
      } else {
        temp += x[i].toLowerCase();
      }
    }
    answer.push(temp);
  }
  return answer.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
