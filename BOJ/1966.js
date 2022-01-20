let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const count = input.shift();

for (let i = 0; i < count; i++) {
  let count = 1;
  let M = input
    .shift()
    .split(" ")
    .map((v) => Number(v))[1];
  let printOrder = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
  let maxOrder = Math.max(...printOrder);

  while (true) {
    const selectedOrder = printOrder.shift();

    // 목표한 값 && 남은 순서 중 가장 중요
    if (M === 0 && maxOrder === selectedOrder) {
      console.log(count);
      break;
    }
    // 목표한 값 but 더 중요한 순서가 남아있음
    else if (M === 0 && maxOrder > selectedOrder) {
      printOrder.push(selectedOrder);
      M = printOrder.length - 1;
    }
    // 목표한 값도 아니고 더 중요한 순서가 남아있음
    else if (maxOrder > selectedOrder) {
      printOrder.push(selectedOrder);
      M--;
    }
    // 가장 중요한 순서 출력
    // 출력 횟수 (count) +1
    // 목표한 값 한 칸 앞으로 땡김
    // 남은 수 중 가장 중요한 순서 다시 계산
    else if (maxOrder === selectedOrder) {
      count++;
      M--;
      maxOrder = Math.max(...printOrder);
    }
  }
}
