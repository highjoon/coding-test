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

    if (M === 0 && maxOrder === selectedOrder) {
      console.log(count);
      break;
    } else if (M === 0 && maxOrder > selectedOrder) {
      printOrder.push(selectedOrder);
      M = printOrder.length - 1;
    } else if (maxOrder > selectedOrder) {
      printOrder.push(selectedOrder);
      M--;
    } else if (maxOrder === selectedOrder) {
      count++;
      M--;
      maxOrder = Math.max(...printOrder);
    }
  }
}
