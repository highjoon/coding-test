let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    let answer = 0;
    let HWN = input[i].split(" ");
    let H = Number(HWN[0]);
    let W = Number(HWN[1]);
    let N = Number(HWN[2]);

    let floorNum = N % H === 0 ? H : N % H;
    let roomNum = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);

    roomNum < 10 ? (answer = `${floorNum}0${roomNum}`) : (answer = `${floorNum}${roomNum}`);
    console.log(answer);
}
