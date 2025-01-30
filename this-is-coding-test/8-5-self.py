x = int(input())

dp = [0] * 30001

# 이전 연산 대비 연산을 한 번 더 했으므로 +1
# 근데 연산 횟수가 -1 한 것 보다 크면 -1 로 진행
for i in range(2, x + 1):
  # -1 가정
  dp[i] = dp[i - 1] + 1
  # 나누기 2 가정
  if i % 2 == 0:
    dp[i] = min(dp[i], dp[i // 2] + 1)
  # 나누기 3 가정
  if i % 3 == 0:
    dp[i] = min(dp[i], dp[i // 3] + 1)
  # 나누기 5 가정
  if i % 5 == 0:
    dp[i] = min(dp[i], dp[i // 5] + 1)

print(dp[x])