# N명의 사람들이 ATM에서 돈을 인출
# 한 사람의 인출 시간은 P분
# 사람들이 서있는 순서에 따라 인출 시간이 달라짐
# 총 인출 시간을 최소로

n = int(input())
peoples = list(map(int, input().split()))
peoples.sort()

answer = 0
sum = 0

# sum을 계속 더해가면서 answer에 추가해준다.
for i in range(n):
  sum += peoples[i]
  answer += sum

print(answer)