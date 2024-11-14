# 1,1 부터 N,N 으로 이동
# 상하좌우로 이동 (L R U D)
# 정사각형 안에서만 이동

# 문제집 풀이
n = int(input())
x, y = 1, 1
plans = input().split()

# L, R, U, D 에 따른 이동 방향
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

# 이동 계획을 하나씩 확인
for plan in plans:
	# 이동 후 좌표 구하기
	for i in range(len(move_types)):
		if plan == move_types[i]:
			nx = x + dx[i]
			ny = y + dy[i]
	# 공간을 벗어나는 경우 무시
	if nx < 1 or ny < 1 or nx > n or ny > n:
		continue

	x, y = nx, ny

print(x, y)

def solution(N, data):
	x = 1
	y = 1

	for coord in data:
		if coord == 'R':
			if y + 1 > N:
				continue
			else:
				y += 1

		if coord == 'U':
			if x - 1 < 1:
				continue
			else:
				x -= 1

		if coord == 'L':
			if y - 1 < 1:
				continue
			else:
				y -= 1

		if coord == 'D':
			if x + 1 > N:
				continue
			else:
				x += 1


	return str(x) + ' ' + str(y)


# print(solution(5, ['R', 'R', 'R', 'U', 'D', 'D'])) # 3 4
