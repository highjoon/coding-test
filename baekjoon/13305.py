# N개의 도시 이동
# 각 도시에서 주유 가능
# 기름값 제일 적게 드는 방법
# 처음 도시에서는 무조건 다음 도시 길이까지 채워야 함
# 이전 도시의 기름값이 다음 도시의 기름값보다 작으면, 이전 도시에서 채우는게 좋다.

n = int(input())
distances = list(map(int, input().split()))
oil_costs = list(map(int, input().split()))

# 처음 도시에서는 무조건 채운다.
total_cost = oil_costs[0] * distances[0]
min_cost = oil_costs[0]

# 다음 도시부터 계산. 맨 마지막 도시는 계산할 필요 없음.
for i in range(1, n - 1):
  # 다음 도시의 기름값이 더 적으면 그 도시에서 이어서 채운다.
  if min_cost > oil_costs[i]:
    min_cost = oil_costs[i]
  total_cost += distances[i] * min_cost

print(total_cost)
