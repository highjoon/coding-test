let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    const newName = input[1];
    const len = newName.length;
    input = input.slice(2);
    let answer = 0;

    for (let oldName of input) {
        if (oldName === newName) answer++;
        else {
            let flag = false;

            for (let i = 0; i < oldName.length; i++) {
                if (oldName[i] === newName[0]) {
                    for (let j = i; j < oldName.length; j++) {
                        if (flag) break;
                        if (oldName[j] === newName[len - 1]) {
                            let avgIdx = Math.ceil((j - i) / (len - 1));
                            let count = 0;
                            while (count < len) {
                                if (oldName[i + avgIdx * count] === newName[count]) count++;
                                else break;
                            }
                            if (count === len && !flag) {
                                answer++;
                                flag = true;
                            }
                        }
                    }
                }
            }
        }
    }

    return answer;
}

console.log(solution(input));
