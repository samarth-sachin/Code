#write a program to print the no from 1 to 5
count = 1
while count <= 5:
    print(count)
    count = count + 1
#write a program to print first ten natural nos
i=1
while i<=10:
      print(i)
      i=i+1
#write a program to print the square of no 2 to 5
j=2
while j<=5:
    print(j*j)
    j=j+1
    #write a program to print the nos from 10 to 1
    k=10
    while k<=1:
        print(k)
        k=k-1
#write a program to print sum of the nos from 1 to 20 which are divisible by 3
a=1
add=0
while a<=20:
    if a%3==0:
     add=add+a
    a=a+1
print(add)
#write a program to print factorial of no

n = 5
result = 1


while n > 1:
    result *= n  # Multiply result by n
    n -= 1       # Decrease n by 1


print("The factorial is",result)
#write a program to print sum of digits of no
number=123
total=0
while number>0:
    total+=number%10
    number=number//10
print("sum",total)