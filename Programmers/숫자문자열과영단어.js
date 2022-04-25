function solution(s) {
  let answer = "";
  let eng = "";
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let str of s) {
    if (isNaN(Number(str))) {
      eng += str;
      if (words.includes(eng)) {
        answer += words.indexOf(eng).toString();
        eng = "";
        continue;
      }
      continue;
    }

    if (!isNaN(Number(str))) {
      answer += str;
      continue;
    }
  }

  answer = Number(answer);
  return answer;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
