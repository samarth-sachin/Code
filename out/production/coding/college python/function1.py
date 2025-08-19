#1. Write a programme to calculate the sum of numbers from 1 to 20 using functions, In the function call use the call by value method.
def sumofno(n):
    sum=0
    for i in range(1, n+1):
        sum=sum+i;
    return sum;
print(sumofno(20))
    
#2. write a programme to calculate the area of a circle using functions when using the function area and use the return statement.
def areacir(r):
    area = 3.14 * r * r
    return area
print(areacir(1))
#3. WAP to multiply 3 numbers in the function definition the type of argument should be variable length argument.
def multiply(*args):
    result = 1
    for number in args:
        result *= number
    return result

# Example usage
print(multiply(2, 3, 4)) # Output will be 24

#4. WAP to calculate the area of a triangle. Pass the values using keyword arguments and print the area of the triangle from outside the function.
def calculate_triangle_area(*, base, height):
    
    return (base * height) / 2
base = 10  # Example base
height = 5  # Example height
area = calculate_triangle_area(base=base, height=height)

# Print the area outside the function
print(f"The area of the triangle is: {area}")


#5. WAP to calculate area and perimeter of the rectangle and print the area and perimeter from outside the function.
def calculate_rectangle(length,breadth):
    return length*breadth,2*(length+breadth)
print(calculate_rectangle(5,4))
#6. WAP to calculate the sum and average of the numbers using call by reference method.
def sumaver(*s):
    sum=0
    for i in s:
        sum=sum+i
        avg=sum/len(s)
        return sum,avg
print(sumaver(5,2,3))
#7. WAP to accept name and roll no of a person. Use default arguments in the functions.
def rollname():
    name = input("Enter your name: ")
    rollno = int(input("Enter your roll number: "))
    return name, rollno

print(rollname())

#8. WAP to calculate the factorial of a number using recursive functions.
def facto(k):
 if k==0:
     return 1
 else:
     return k*facto(k-1)
 
print(facto(5))

#9. Create a lambda function to add two numbers and display the result.
def addition():
    return lambda no1, no2: no1 + no2

add = addition()
print(add(3, 4))  # This will print 7
