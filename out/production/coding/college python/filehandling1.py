'''#2. WAP to open a file to read the statement and print it.
f=open("file.txt","r")
print(f.read())
#3. WAP to perform the append operation on the existing file.
f1=open("file.txt","a")
f1.write(" i love python")

#4. WAP to input five numbers into a file and display the sum of all numbers present in the file.
# Writing five numbers to a file
f = open("numbers.txt", "w")
print("Enter 5 numbers:")
for i in range(5):
    number = input("Enter a number: ")
    f.write(number + "\n")
f.close()

# Reading numbers from the file and calculating their sum using a for loop
f1 = open("numbers.txt", "r")
numbers = f1.readlines()
f1.close()

total = 0
for num in numbers:
    total += int(num)  # Directly converting each line to an integer (newline character ignored)

print("The sum of the numbers in the file is:", total)'''

#5. WAP to read the contents from the file grades.txt and calculate the total marks and percentage gained by the student.
# Reading the contents of grades.txt and calculating total marks and percentage


#6. WAP to perform the following operations using seek function and basic file operations:
#   a. Open file weekdays.txt in write mode.
#   b. Write weekdays from Monday to Friday in a file weekdays.txt

  # c. Use seek function to read the content of the file.

  #    #d. Set the pointer to the end of the file and append two remaining weekdays Sat and Sun to the existing file.
#e. Read and print all the contents of the file.
# a. Open the file weekdays.txt in write mode
f2 = open("weekdays.txt", "w")

# b. Write weekdays from Monday to Friday in the file
f2.write("Monday\nTuesday\nWednesday\nThursday\nFriday")
f2.close()

# c. Use seek function to read the content of the file
f2 = open("weekdays.txt", "r")
f2.seek(0)  # Set the pointer to the beginning of the file
print("Contents of the file after writing weekdays from Monday to Friday:")
print(f2.read())
f2.close()

# d. Set the pointer to the end of the file and append two remaining weekdays Sat and Sun
f2 = open("weekdays.txt", "a")
f2.write("\nSaturday\nSunday")
f2.close()

# e. Read and print all the contents of the file
f2 = open("weekdays.txt", "r")
f2.seek(0)  # Set the pointer to the beginning of the file
print("\nContents of the file after appending Saturday and Sunday:")
print(f2.read())
f2.close()
