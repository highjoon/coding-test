let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [N, K] = input[0].split(" ").map(Number);
  input = input[1].split(" ").map(Number);

  const tab = Array.from({ length: N }, () => 0);
  let swap = 0;
  let maxIdx = 0;
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    let newTask = input[i];

    // 이미 탭에 꽂혀있으면 continue
    if (tab.includes(newTask)) {
      continue;
    } else if (tab.includes(0)) {
      // 탭에 공간이 있으면 새로 꽂고 continue
      tab[tab.indexOf(0)] = newTask;
      continue;
    } else {
      // 탭에 꽂혀있지도 않고, 탭을 전부 사용중일때
      // 현재 탭에 꽂혀있는 용품 중에서
      for (let task of tab) {
        // 앞으로 사용할 일이 없는 용품일 경우 탭에서 제거.
        if (!input.slice(i).includes(task)) {
          swap = task;
          break;
        } else if (input.slice(i).indexOf(task) > maxIdx) {
          // 뒤에서 또 사용해야되는 용품일 경우, 제일 늦게 사용할 용품을 탭에서 제거.
          maxIdx = input.slice(i).indexOf(task);
          swap = task;
        }
      }
      // 제거하고 새로 꽂음.
      tab[tab.indexOf(swap)] = newTask;
      maxIdx = 0;
      swap = 0;
      answer++;
    }
  }

  return answer;
}

console.log(solution(input));
