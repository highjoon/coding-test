function solution(numbers, target) {
    let answer = 0;

    function DFS(L, result) {
        if (L === numbers.length) {
            if (result === target) {
                answer++;
            }
            return;
        }

        DFS(L + 1, result + numbers[L]);
        DFS(L + 1, result - numbers[L]);
    }

    DFS(0, 0);
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
