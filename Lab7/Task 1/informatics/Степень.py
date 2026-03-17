def power(a, n):
    res = 1.0
    for i in range(n):
        res *= a
    return res

line = input().split()
a = float(line[0])
n = int(line[1])

print(power(a, n))