function solution(n) {
    let answer = 0;
    let temp = [];

    function DFS(num) {
        if (num === 0) return;
        DFS(parseInt(num / 3));
        temp.push(num % 3);
    }

    DFS(n);
    temp = temp.reverse().join("");

    for (let i = 0; i < temp.length; i++) {
        answer += temp[i] * Math.pow(3, temp.length - i - 1);
    }

    return answer;
}

console.log(solution(45));
console.log(solution(125));
