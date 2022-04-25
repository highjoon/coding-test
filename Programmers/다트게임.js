function solution(dartResult) {
  let answer = [];
  let temp1;
  let temp2;

  for (let i = 0; i < dartResult.length; i++) {
    let result = dartResult[i];

    if (!isNaN(Number(result))) {
      if (result === "1" && dartResult[i + 1] === "0") {
        answer.push("10");
        i++;
      } else {
        answer.push(result);
      }
    } else if (result === "S") {
      answer.push(Math.pow(answer.pop(), 1));
    } else if (result === "D") {
      answer.push(Math.pow(answer.pop(), 2));
    } else if (result === "T") {
      answer.push(Math.pow(answer.pop(), 3));
    } else if (result === "*") {
      temp1 = Number(answer.pop());
      temp2 = Number(answer.pop());
      if (!temp2) {
        answer.push(temp1 * 2);
      } else {
        answer.push(temp2 * 2);
        answer.push(temp1 * 2);
      }
    } else if (result === "#") {
      answer.push(answer.pop() * -1);
    }
  }
  answer = answer.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
