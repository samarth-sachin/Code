#1.create a list of 5 nos and view the list
list=[3,6,24,13,6]
print(list)
#2.create a list of strings and print them using a index of strings
list_1=["PYTHON","VIT","AIML"]
print(list_1[0])
print(list_1[1])
print(list_1[2])
#3.print the length of the list
print(len(list))
#4.create a list of 4 nos add two more nos at the end of the list
list_2=[1,2,3,4]
list_2.append(5)
list_2.append(6)

print(list_2)
#5.create a list and add the new element at position 3 in the list
list_3=[1,3,0,2,6]
list_3.insert(2,5)
print(list_3)
#6.create a list and add multiple new elements in the list
list_4=[2,3,5,6,4]
list_4.extend([8,"python","college"])
#7.creaete a 2d list and print the 4th element at the list
list_5=[["good","afternoon"],["welcome"],["hi"]]
print(list_5[2][0])
#8.create a list and remove the first ocurrence of the any elment in the list
list_6=[45,18,7,93]
del list_6[0]
print(list_6)

#9.create a list and remove the last element of the list
list_7=[33,99,83,77]
list_7.pop()
print(list_7)

#10.create a list and remove the element which is present in index 4
list_8=[49,35,13,2006,32]
list_8.pop(4)
print(list_8)
#11.create a list and print the elements from the index 3 to 5
list_11=["today","is","very","beautiful","day"]
print(list_11[3][5])
#12.create a list and perform the replications of the list using multiplication operator additon of list using + operator check the element is present in the list or not using membership operator check both list are same or not using is oprerator
list_10=[15,17,90,188,199]
#list_12=[15,17,90,188,199]
list_12=[1,4,9,16,25,36]
print("Original list:", list_10)
replicated_list = list_10 * 3
print("Replicated list:", replicated_list)
combined_list = list_10 + list_12
print("Combined list:", combined_list)
element = 2
present = element in list_10
print(f"Is {element} present in the list?",present)
same = list_10 is list_12
print("Are both lists the same?", same)
