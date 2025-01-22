n = 2
array = [('홍길동',95),('이순신',77)]

array = sorted(array, key=lambda student: student[1])

for student in array:
  print(student[0], end=' ')