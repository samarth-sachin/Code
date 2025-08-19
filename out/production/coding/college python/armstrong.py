a=int(input("enter a no"))
b=str(a)
length=len(b)
sum=0
for n in b:
    sum=sum+int(n)**length
if sum==a:
    print("armstrong")
else:
    print("no")