function solution(people, limit) {
  people = people.sort((a, b) => a - b);
  let answer = 0;
  let lt = 0;
  let rt = people.length - 1;
  let boardNum = 0;
  let peopleNum = people.length;

  while (lt < rt) {
    let sum = people[lt] + people[rt];
    if (sum <= limit) {
      answer++;
      boardNum += 2;
      lt++;
      rt--;
    } else if (sum > limit) {
      rt--;
    }
  }
  answer += peopleNum - boardNum;
  return answer;
}

let p1 = [70, 50, 80, 50];
let l1 = 100;
let p2 = [70, 80, 50];
let l2 = 100;
let p3 = [20, 30, 40, 50, 60, 70, 80, 90, 100];
let l3 = 100;

console.log(solution(p1, l1));
console.log(solution(p2, l2));
console.log(solution(p3, l3));
