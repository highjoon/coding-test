function solution(new_id) {
    let answer = "";
    const stack = [];
    let repeat = "";

    new_id = new_id.toLowerCase();
    new_id = new_id.split("").filter((v) => {
        if (
            (v.charCodeAt(0) >= 97 && v.charCodeAt(0) <= 122) ||
            !isNaN(Number(v)) ||
            v === "-" ||
            v === "_" ||
            v === "."
        ) {
            return v;
        }
    });
    new_id = new_id.reverse();
    while (new_id.length) {
        let temp = new_id.pop();
        if (temp === ".") {
            if (stack[stack.length - 1] !== ".") {
                stack.push(temp);
            } else {
                continue;
            }
        } else {
            stack.push(temp);
        }
    }
    new_id = stack.slice();
    if (new_id[0] === ".") new_id.shift();
    if (new_id[new_id.length - 1] === ".") new_id.pop();
    if (!new_id.length) new_id.push("a");
    if (new_id.length >= 16) new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === ".") new_id.pop();
    if (new_id.length <= 2) {
        repeat = new_id[new_id.length - 1];
        while (new_id.length !== 3) {
            new_id.push(repeat);
        }
    }
    answer = new_id.join("");
    return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
