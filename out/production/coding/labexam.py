#1
n=int(input("enter a no to reverse"))
if n>9999 and n<1000:
    print("enter a valid no")
else:
    rev=0
    while n>0:
        ld=n%10
        rev=rev*10+ld
        n=n//10
    print(rev)

#2
dic1={1:"a",2:"b",3:"c"}
dic2={4:"d",5:"e",6:"f"}
dic3=dic1.copy()
dic3.update(dic2)
print(dic3)
