# Task 1: Create a set of five elements and print the elements
set1 = {1, 2, 3, 4, 5}
print("Set 1:", set1)

# Task 2: Create a set and add a new element to the set
set2 = {10, 20, 30}
set2.add(40)
print("Set 2 after adding an element:", set2)

# Task 3: Create a set and add multiple elements of different datatypes
set3 = {"Python", 3.14, True}
set3.update([100, "AI"])
print("Set 3 after adding multiple elements:", set3)

# Task 4: Create a set and remove elements using remove() and discard()
set4 = {10, 20, 30, 40}
set4.remove(20)  # Removes 20 (raises error if not present)
set4.discard(50) # Does nothing if 50 is not present
print("Set 4 after removing elements:", set4)

# Task 5: Create a set and remove an element using pop()
set5 = {100, 200, 300}
popped_element = set5.pop()
print("Popped element from Set 5:", popped_element)
print("Set 5 after pop:", set5)

# Task 6: Create two sets and perform union, intersection, difference, and symmetric difference
setA = {1, 2, 3, 4}
setB = {3, 4, 5, 6}
print("Union:", setA|setB)
print("Intersection:", setA&setB)
print("Difference (A - B):", setA-setB)
print("Symmetric Difference:", setA^setB)

# Task 7: Perform membership operation to check if an element is in a set
set7 = {"apple", "banana", "cherry"}
print("Is 'banana' in set7?", 'banana' in set7)
print("Is 'grape' not in set7?", 'grape' not in set7)

# Task 8: Apply functions like isdisjoint, issubset, issuperset, difference_update, intersection_update, symmetric_difference_update, and copy
set8A = {1, 2, 3}
set8B = {3, 4, 5}
print("Are set8A and set8B disjoint?", set8A.isdisjoint(set8B))
print("Is set8A a subset of set8B?", set8A.issubset(set8B))
print("Is set8A a superset of set8B?", set8A.issuperset(set8B))

# Updating set8A with set operations
set8A.difference_update(set8B)
print("set8A after difference_update:", set8A)
set8A = {1, 2, 3}  # Resetting for next operation
set8A.intersection_update(set8B)
print("set8A after intersection_update:", set8A)
set8A = {1, 2, 3}  # Resetting for next operation
set8A.symmetric_difference_update(set8B)
print("set8A after symmetric_difference_update:", set8A)

# Copying a set
set8C = set8A.copy()
print("Copy of set8A:", set8C)
