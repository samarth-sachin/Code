#1.write a program to check the no is even or odd using if else statement
a=int(input("enter value of a to check a odd or even:"))
if(a%2==0):print("the no is even")
else: print("the no is odd")
#2.write a program to check whether the given value is greater than or less than 50 using  statement.ifelse
b=int(input("enter the no to check it is greter than of equal to 50"))
if(b<50):
    print("the no is less than 50")
elif(b>50):
    print("the no is greter than 50")
else:
    print("the no is equal to 50")
    #3.write a program to find the no is positive ,negative or zero using elif statements.
c=int(input("enter the no to check is it positive or negative"))
if(c>0):
    print("the no is positive")
elif(c<0):
    print("the no is negative")
else:
    print("the no is equal to zero")
    #4.read the marks in percentage of students and find grade of student as per the given condition above 75 percent is distinction 60 percent to below 75 percent is first class 50 percent to below 60 percent second class 50 to 40 pass class and below 40 is fail using elif statements
d=int(input("enter the percentage of a yours"))
if(d>75):
    print("your grade is distinction")
elif(d<75 and d>60):
    print("your grade is first class")
elif(d<60 and d>50):
    print("your grade is second class")
elif(d<60 and d>40):
 print("your grade is pass class")
elif(d<40):
 print("your grade is fail")
 #.write a program to print the largest of three nos using elif statement and using nested if else statements.
 num_1=int(input("enter first no"))
 num_2=int (input("enter second no"))
 num_3=int (input("enter a third no"))
 if(num_1>num_2):
    if(num_3>num_1):
       print("the largest no is",num_3)
    else:
       print("the largest no is",num_1)
 else:
    if(num_2>num_3):
       print("the largest is:",num_2)
    else:
       print("the largest is",num_3)
       #6.write a program to check the year is leap year or not using elif statement and nested if else statemens.
       year=int(input("enter the year to check leap year"))
    if(year%2==0):
        if(year%100==0):
            if(year%400):
                print("the year is leap year")
            else:
                 print("the year is not leap year")
        else: print ("the year is leap")
    else:
         print("the year is not leap")
#.write a program to print the largest of three nos using elif statement and using nested if else statements.
no1 = int(input("Enter a number 1: "))
no2 = int(input("Enter a number 2: "))
no3 = int(input("Enter a number 3: "))

# Compare the three numbers
if no1 > no2 and no1 > no3:
    print("The greatest number is", no1)
elif no2 > no1 and no2 > no3:
    print("The greatest number is", no2)
else:
    print("The greatest number is", no3)
