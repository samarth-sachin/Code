
#1. WAP to open a file and write the statement "Welcome to python programming".
f=open("file.txt","w")
print(f.write("welcome to python programing"))



f1 = open("grades.txt", "w")


list=[2,24,54,75,80]
for j in list:
  f.write(str(j))
print(j)

f = open("grades.txt", "r")
grades = f.readlines()


# Calculating total marks
total_marks = 0
for i in grades:
    total_marks =+int(i)  # Convert each line (mark) to an integer and add to total

# Assuming each subject is out of 100 marks
percentage = (total_marks / 500) * 100

# Displaying the results
print("Total Marks:", total_marks)
print("Percentage:", percentage, "%")

