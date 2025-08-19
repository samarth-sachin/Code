#1WAP to create a dictionary with 5 values and print them.
my_dic = {"course1": "vit", "course2": "python", "course3": 1302, "course4": "aiml", "course5": "e"}
print(my_dic)
#2create empty dictionary and add 3 elements into the dictionary.
my_dic2={}
my_dic2[0]="pune"
my_dic2[1]=2024
my_dic2[2]="calculus"
print(my_dic2)
#3.	Delete the 3rd element from the dictionary.
my_dic3 = {1: "VIT", 2: "python", 3: 1122, 4: "aiml", 5: "division e"}
del my_dic3[1]
print(my_dic3)
pop_ele=my_dic3.pop(3)
print(my_dic3)
#4.	create a dictionary and implement len(), copy(), has_key(), get(),set_default().
# Creating the dictionary
my_dic4 = {1: "Samarth", 2: "Pune", 3: "VIT college", 4: 5}

# len()
print("Length of dictionary:", len(my_dic4))

# copy()
copied_dic = my_dic4.copy()
print("Copied dictionary:", copied_dic)

# has_key() - Use 'in' instead
key_to_check = 4
print(f"Key {key_to_check} exists:", key_to_check in my_dic4)

# get()
print("Value for key 3:", my_dic4.get(7, 0))

# setdefault()
default_key = 5
default_value = 0
my_dic4.setdefault(default_key, default_value)
print("Dictionary after setdefault():", my_dic4)
#5.Program to sort (ascending and descending) a dictionary by value 
my_dict8 = {1: 45, 2: 10, 3: 30, 4: 25}

# Ascending order
sorted_dict_asc = dict(sorted(my_dict8.items(), key=lambda item: item[1]))
print("Ascending order:", sorted_dict_asc)

# Descending order
sorted_dict_desc = dict(sorted(my_dict8.items(), key=lambda item: item[1], reverse=True))
print("Descending order:", sorted_dict_desc)

#6.program to concanate dictionaries
dict1 = {1: "A", 2: "B"}
dict2 = {3: "C", 4: "D"}
dict3 = {5: "E"}

# Concatenate dictionaries
concatenated_dict = {**dict1, **dict2, **dict3}
print("Concatenated dictionary:", concatenated_dict)
#7.	 Program to check whether a given key already exists in a dictionary.
my_dic7={1:"PYTHON",2:"VIT",3:"AIML",4:4}
key_to_have=4
if key_to_have in my_dic7:
    print("the no is present in dictionary")
else:
    print("the no is not present in dictionary")
#8.	Program to merge two Python dictionaries 
dict11 = {1: "A", 2: "B"}
dict22 = {2: "Z", 3: "C"}
checkdic=dict11.copy()
checkdic.update(dict22)
print(checkdic)
#9.	Program to get the maximum and minimum value in a dictionary .
my_dict9 = {1: 45, 2: 10, 3: 30, 4: 25}
print(max(my_dict9.values))
print(min(my_dict9.values))
