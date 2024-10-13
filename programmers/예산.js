function solution(d, budget) {
    let answer = 0;
    d = d.sort((a, b) => a - b);
    for (let demand of d) {
        if (demand > budget) break;
        budget -= demand;
        answer++;
    }
    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
