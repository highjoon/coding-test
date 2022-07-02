function getBinary(n, num) {
    let result = [];

    function DFS(L) {
        if (L === 0) return;
        else {
            DFS(parseInt(L / 2));
            result.push((L % 2).toString());
        }
    }

    DFS(num);

    if (result.length < n) {
        result = result.reverse();
        let tmp = n - result.length;
        for (let i = 1; i <= tmp; i++) {
            result.push("0");
        }
        result = result.reverse();
    }

    return result.join("");
}

function solution(n, arr1, arr2) {
    const answer = [];
    let decodedArr1 = [];
    let decodedArr2 = [];
    let temp = "";

    for (let i = 0; i < n; i++) {
        decodedArr1.push(getBinary(n, arr1[i]));
        decodedArr2.push(getBinary(n, arr2[i]));
    }

    for (let i = 0; i < n; i++) {
        temp = "";
        for (let j = 0; j < n; j++) {
            if (decodedArr1[i][j] === "1" || decodedArr2[i][j] === "1") {
                temp += "#";
            } else {
                temp += " ";
            }
        }
        answer.push(temp);
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
