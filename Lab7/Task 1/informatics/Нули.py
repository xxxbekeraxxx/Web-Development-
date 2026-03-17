n = int(input())
has_zero = False

for _ in range(n):
    if int(input()) == 0:
        has_zero = True
        
if has_zero:
    print("YES")
else:
    print("NO")