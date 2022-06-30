let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let arr = input.map((v) => v.split(" "));
    const answer = [];

    const passAll = (dance) => {
        answer.push(`form ok: ${dance}`);
    };

    const missSingle = (order, dance) => {
        answer.push(`form error ${order}: ${dance}`);
    };

    const missMultiple = (orders, dance) => {
        let seperated = orders.slice(0, orders.length - 1).join(", ");
        answer.push(`form errors ${seperated} and ${orders[orders.length - 1]}: ${dance}`);
    };

    const checkFirstRule = (idx, dance) => {
        if (dance[idx - 1] === "jiggle" || dance[idx - 2] === "jiggle" || dance[idx + 1] === "twirl") {
            return true;
        }
        return false;
    };

    const checkSecondRule = (dance) => {
        if (
            dance[dance.length - 1] !== "clap" ||
            dance[dance.length - 2] !== "stomp" ||
            dance[dance.length - 3] !== "clap"
        ) {
            return false;
        }
        return true;
    };

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let errors = [];
        let isDip = false;

        if (current[0] === "jiggle") errors.push(4);
        if (!checkSecondRule(current)) errors.push(2);

        for (let j = 0; j < current.length; j++) {
            if (current[j] === "dip") {
                isDip = true;
                if (checkFirstRule(j, current) === false) {
                    current[j] = "DIP";
                    errors.push(1);
                }
            }
            if (current[j] === "twirl") {
                if (!current.includes("hop")) errors.push(3);
            }
        }

        if (isDip === false) errors.push(5);
        errors.sort((a, b) => a - b);

        if (!errors.length) passAll(current.join(" "));
        else if (errors.length === 1) missSingle(errors[0], current.join(" "));
        else missMultiple(errors, current.join(" "));
    }

    return answer.join("\n");
}

console.log(solution(input));
