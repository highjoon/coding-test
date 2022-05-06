function solution(priorities, location) {
  let answer = 0;
  priorities = priorities.map((v, i) => {
    return i === location ? v.toString() : v;
  });

  while (true) {
    let current = priorities.shift();
    if (priorities.some((v) => v > Number(current))) {
      priorities.push(current);
    } else {
      answer++;
      if (typeof current === "string") {
        break;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
