#normal for practice
#for n in 4,2,1,6:
 #print(n)
'''k=[5,3,2,6,7]
for val in k:
    print (val)'''
'''for n in range(0,11):
 print(4*n)'''

'''for i in range(1, 5 + 1):
    print(' ' * (5 - i) + '*' * (2 * i - 1))'''
#1.write a program to print the value from one to five using for loop
for i in range(1,6):
    print(i)
    #2.write a program to print first ten natural numbers using for loop
for k in range (1,11):
    print (k)
   # 3.write a program to print square of first three numbers
for s in range(1,4):
     print(s*s)
     #4.write a program to print the numbers in reverse order
for j in range(10,7):
    print(j)
    #5.write a program to print numbers from one to ten and sum all the nos.
sum=0
for a in range(1,11):
    sum+=a
    print("sum=",sum)
#6.write a program to print odd nos from one to 20 and add all the odd nos.
add=0
for g in range(1,21):
    if g%2!=0:
      add+=g
      print(g)
      print(add)

#7.write a program to print take input five strings from user and display it,
arr=["PYTHON","VIT","AIML"]
for i in arr:
    print(i)
add=0
for k in range(1,21,2):
        add+=k
        print(k)
        print(add)