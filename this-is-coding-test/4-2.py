# 정수 N
# 00시 00분 00초 부터 N시 59분 59초까지 중 3이 하나라도 포함되면 카운팅

h = int(input())

count = 0

for i in range(h+1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                count += 1
                print(str(i) + str(j) + str(k))


print(count)
