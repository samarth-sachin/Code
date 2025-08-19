#5 write a program to accept a list and perform append ooperration on a list pass the list by using call by referace method
def append_to_list(my_list, nos):
    my_list.append(nos)

# Example usage
my_list = [1,2,3,5,7]
nos = input("Enter an item to append: ")
append_to_list(my_list, nos)

print("Updated list:", my_list)
