function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((v, i) => {
        if (i === location) return v.toString();
        else return v;
    });

    while (queue.length) {
        let current = queue.shift();
        if (queue.some((v) => Number(v) > current)) {
            queue.push(current);
        } else {
            if (typeof current === "string") {
                answer++;
                break;
            }
            answer++;
        }
    }

    return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], location20));
