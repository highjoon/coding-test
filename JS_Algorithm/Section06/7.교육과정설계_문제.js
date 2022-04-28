function solution(need, plan) {
  let answer = "YES";
  plan = plan.split("").reverse();
  for (let x of need) {
    while (x !== plan[plan.length - 1]) {
      plan.pop();
    }
    if (!plan.length) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

console.log(solution("CBA", "CBDAGE")); // YES
console.log(solution("CBA", "CABA")); // YES
console.log(solution("CBA", "CBBDAGE")); // YES
console.log(solution("CBA", "CBDDAB ")); // YES
console.log(solution("CBA", "CBDAGAE")); // YES
console.log(solution("ABC", "BABC")); // YES
