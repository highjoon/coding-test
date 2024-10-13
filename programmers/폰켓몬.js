function solution(nums) {
    let answer = 0;
    const nHalf = nums.length / 2;
    const m = Array.from(new Set(nums)).length;
    answer = nHalf < m ? nHalf : m;
    return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
