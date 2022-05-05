function solution(skill, skill_trees) {
  let answer = 0;
  let filtered = skill_trees.map((v) =>
    v.split("").filter((x) => {
      if (skill.includes(x)) {
        return x;
      }
    })
  );
  for (let i = 0; i < filtered.length; i++) {
    let flag = true;
    for (let j = 0; j < filtered[i].length; j++) {
      if (filtered[i][j] !== skill[j]) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
