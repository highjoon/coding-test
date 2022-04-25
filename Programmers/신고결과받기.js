function solution(id_list, report, k) {
  report = Array.from(new Set(report));
  let answer = [];
  let plaintiff = "";
  let defendant = "";
  let defHash = new Map();
  let repHash = new Map();

  for (let rep of report) {
    [plaintiff, defendant] = rep.split(" ");
    defHash.set(defendant, defHash.get(defendant) + 1 || 1);
  }

  for (let rep of report) {
    [plaintiff, defendant] = rep.split(" ");
    if (defHash.get(defendant) >= k) {
      repHash.set(plaintiff, repHash.get(plaintiff) + 1 || 1);
    }
  }

  answer = id_list.map((id) => repHash.get(id) || 0);

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
