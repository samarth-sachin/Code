#write a program to print a pattern 
''' i in range(1,6):
    for j in range(i):
        print("*",end=" ")
    print()'''
   # write a program to print a multiplication table of any no)
'''n=int(input("enter a no"))
a=0
while a<10:
    a=a+1
    print(a*n)   '''
#write a program to check the no from to 1 to 10 first no occurs is divisible by 5 and break the loop
'''for k in range(1,11):
    if(k%5==0):
        print(k)
        break'''
#write a program to check the no is prime or not for and break should used
b = int(input("Enter a number: "))
if b <= 1:
    print("The number is neither prime nor composite.")
else:
    count = 0
    for i in range(1,b+1):
        if b % i == 0:
            count += 1
          # No need to check further if a divisor is found
    if count == 2:
        print("The number is prime.")
    else:
        print("The number is composite.")



#write a program to print odd no from the range 1 to 10 continue statement should used
''''for i in range(1,11):
    if(i%2==1):
        print(i)
        break'''


