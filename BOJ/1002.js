const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
    const xyrxyr = input[i].split(" ").map((num) => parseInt(num));
    const x1 = xyrxyr.shift();
    const y1 = xyrxyr.shift();
    let r1 = xyrxyr.shift();
    const x2 = xyrxyr.shift();
    const y2 = xyrxyr.shift();
    let r2 = xyrxyr.shift();

    const dx = x1 - x2;
    const dy = y1 - y2;
    if (r1 > r2) {
        const temp = r1;
        r1 = r2;
        r2 = temp;
    }
    const rSum = (r1 + r2) * (r1 + r2);
    const rSub = (r2 - r1) * (r2 - r1);
    const d = dx * dx + dy * dy;

    if (d < rSum && d > rSub) {
        console.log(2);
    } else if (d === rSum || (d === rSub && d !== 0)) {
        console.log(1);
    } else if (d < rSub || d > rSum) {
        console.log(0);
    } else if (d === 0) {
        if (r1 === r2) {
            console.log(-1);
        } else {
            console.log(0);
        }
    }
}
