# N 종류의 동전을 최소한으로 더해서 K로 만들고 싶다.
# 동전 개수
# result 에 몫을 더하고 n은 나머지

def solution(n, k, data):
  result = 0
  coin_list = sorted(data, reverse=True)
  
  for coin in coin_list:

    if coin > k:
      continue

    result += (k // coin)
    k %= coin

    if (k <= 0):
      break

  return result


N, K = map(int, input().split())
coin_list = []
for i in range(N):
  coin_list.append(int(input()))

print(solution(N, K, coin_list))
