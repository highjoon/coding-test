# n x m 크기 정사각현
# (A,B) -> A: y좌표, B: x좌표
# 1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향부터 차례대로 갈 곳을 정한다.
# 2. 캐릭터의 바로 왼쪽 방향에 가보지 않은 칸이 존재한다면, 왼쪽 방향으로 회전한 다음 왼쪽으로 한칸 전진한다. 가보지 않은 칸이 없다면 왼쪽 방향으로 회전만 수행하고 1단계로 돌아간다.
# 3. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 바라보는 방향을 유지한 채로 한칸 뒤로 가고 1단계로 돌아간다. 단, 이때 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우에는 움직임을 멈춘다.
# 5. 방문한 칸의 수를 출력한다.
# 0: 북쪽, 1: 동쪽, 2: 남쪽, 3: 서쪽

# 4 4
# 1 1 0
# 1 1 1 1
# 1 0 0 1
# 1 1 0 1
# 1 1 1 1

n, m = map(int, input().split())
x, y, direction = map(int, input().split())

# 맵 초기화
map = []
for i in range(n):
  map.append(list(map(int, input().split())))

# 방문 여부 체크용 배열
check_map = [[0 for j in range(m)] for i in range(n)]

# 첫 번째 위치 방문 처리
check_map[x][y] = 1
count = 1
turn_time = 0

# 방향
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

# 왼쪽 회전 함수
def turn_left():
  global direction
  direction -= 1
  
  if direction < 0:
    direction = 3


while True:
  # 왼쪽 회전
  turn_left()
  # 다음 방향 위치
  nx = x + dx[direction]
  ny = y + dy[direction]

  # 육지 + 첫 방문이면 방문 처리
  if map[nx][ny] == 0 and check_map[nx][ny] == 0:
    check_map[nx][ny] = 1
    x = nx
    y = ny
    count += 1
    turn_time = 0
    continue
  else:
    # 방문할 수 없으면 다음 방향 회전
    turn_time += 1
  
  # 전부 회전했을 경우
  if turn_time == 4:
    nx = x - dx[direction]
    ny = y - dy[direction]

    # 한 칸 뒤가 육지이면 이동
    if map[nx][ny] == 0:
      x = nx
      y = ny
    # 아니면 중지
    else:
      break

    turn_time = 0

print(count)
