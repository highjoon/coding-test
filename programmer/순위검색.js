function solution(info, query) {
    const getInfos = (info) => {
        let infos = {};
        info.forEach((data) => {
            let splited = data.split(" ");
            let score = Number(splited.pop());
            let key = splited.join("");
            if (infos[key]) infos[key].push(score);
            else infos[key] = [score];
        });
        for (let key in infos) {
            infos[key].sort((a, b) => a - b);
        }
        return infos;
    };

    const binarySearch = (arr, target) => {
        let lt = 0;
        let rt = arr.length - 1;
        let mid = Math.floor((lt + rt) / 2);
        while (lt <= rt) {
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) lt = mid + 1;
            else rt = mid - 1;
            mid = Math.floor((lt + rt) / 2);
        }
        return mid + 1;
    };

    const getResult = (infos, query, score) => {
        let infosKey = Object.keys(infos);
        return infosKey
            .filter((key) => query.every((q) => key.includes(q)))
            .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
    };

    let answer = [];
    let infos = getInfos(info);
    query
        .map((q) => q.split(/ and | |-/i))
        .filter((v) => v !== "")
        .forEach((query) => {
            const score = query.pop();
            const result = getResult(infos, query, score);
            answer.push(result);
        });
    return answer;
}

console.log(
    solution(
        [
            "java backend junior pizza 150",
            "python frontend senior chicken 210",
            "python frontend senior chicken 150",
            "cpp backend senior pizza 260",
            "java backend junior chicken 80",
            "python backend senior chicken 50",
        ],
        [
            "java and backend and junior and pizza 100",
            "python and frontend and senior and chicken 200",
            "cpp and - and senior and pizza 250",
            "- and backend and senior and - 150",
            "- and - and - and chicken 100",
            "- and - and - and - 150",
        ]
    )
);
