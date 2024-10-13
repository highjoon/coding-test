# 1개의 회의실을 사용하려는 N개의 회의 I
# 회의 I 별로 시작시간, 종료시간이 있음
# 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대 개수
# 회의는 중간에 멈출 수 없음
# 한 회의가 끝나는 동시에 다음 회의 시작 가능
# 회의 시작 시간, 종료 시간이 같을 수 있음 (시작하자마자 끝남)

import sys

N = int(sys.stdin.readline())
meetings = []
for i in range(N):
  start, end = map(int, sys.stdin.readline().split())
  meetings.append((start, end))

# 종료 시간 기준 오름차순 정렬. 종료 시간이 같으면 시작 시간 기준으로 오름차순 정렬
meetings.sort(key=lambda x: (x[1], x[0]))
# 회의는 무조건 시작
result = 1
end_time = meetings[0][1]

# 두 번째 회의부터 계산
for i in range(1, N):
  new_start, new_end = meetings[i]
  if new_start >= end_time:
    end_time = new_end
    result += 1

print(result)