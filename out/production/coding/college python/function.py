#1write a program to print welcome to python programing using a function name display
def display():
    print("welcome to python programing")
display()
#2write a program to accept to ask the student name addn age and display them 
def getinfo():
 age=input("enter your age")
 name=input("enter your name")
 return age,name
def displayinfo(age,name):
  print("student age",age)
  print("student name",name)
age,name=getinfo()
displayinfo(age,name)
#3 write a program to add two nos and display them by using call by value method:
def getnos(a,b):
    sum=a+b
    print(sum)
a=int(input("enter a no to add"))
b=int(input("enter an another no to add"))
getnos(a,b)
#4 write a program to find factorial of no using postional arguments
def facto(k):
    f = 1
    for i in range(1, k + 1):
        f *= i
    print(f)

k = int(input("Enter a number: "))
facto(k)

#5 write a program to accept a list and perform append ooperration on a list pass the list by using call by referace method
def append_to_list(my_list, nos):
    my_list.append(nos)

# Example usage
my_list = [1,2,3,5,7]
nos = input("Enter an item to append: ")
append_to_list(my_list, nos)

print("Updated list:", my_list)

def multiply(*args):
    result = 1
    for number in args:
        result *= number
    return result

# Example usage
print(multiply(2, 3, 4)) # Output will be 24
