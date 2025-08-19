# 1. Create a tuple of 5 numbers and view the tuple
tuple_1 = (3, 6, 24, 13, 6)
print("Tuple 1:", tuple_1)

# 2. Create a tuple of strings and print them using indices
tuple_2 = ("PYTHON", "VIT", "AIML")
print("Tuple 2 elements:")
print(tuple_2[0])
print(tuple_2[1])
print(tuple_2[2])

# 3. Print the length of the tuple
print("Length of Tuple 1:", len(tuple_1))

# 4. Find the maximum value in tuple_1
print("Maximum value in Tuple 1:", max(tuple_1))

# 5. Find the minimum value in tuple_1
print("Minimum value in Tuple 1:", min(tuple_1))

# 6. Sort tuple_1
sorted_tuple = sorted(tuple_1)
print("Sorted Tuple 1:", sorted_tuple)

# 7. Create a 2D tuple and print the 4th element in the tuple
tuple_6 = (("good", "afternoon"), ("welcome",), ("hi",))
print("4th element in tuple_6:", tuple_6[2][0])

# 8. Use all() and any() functions
print("Does all() return True for Tuple 1?", all(tuple_1))
print("Does any() return True for Tuple 1?", any(tuple_1))

# 9. Use enumerate() to iterate through tuple_2 with indices
print("Enumerated Tuple 2:")
for index, value in enumerate(tuple_2):
    print(f"Index {index}: {value}")

# 10. Convert a list into a tuple
sample_list = [1, 2, 3, 4, 5]
tuple_from_list = tuple(sample_list)
print("Tuple converted from list:", tuple_from_list)

# 11. Create a tuple and print the elements from index 3 to 5
tuple_11 = ("today", "is", "very", "beautiful", "day")
print("Elements from index 3 to 5 in tuple_11:", tuple_11[3:5])

# 12. Tuple operations: replication, addition, membership, and comparison
tuple_10 = (15, 17, 90, 188, 199)
tuple_12 = (1, 4, 9, 16, 25, 36)
print("Original tuple_10:", tuple_10)

# Replication
replicated_tuple = tuple_10 * 3
print("Replicated tuple:", replicated_tuple)

# Addition
combined_tuple = tuple_10 + tuple_12
print("Combined tuple:", combined_tuple)

# Membership
element = 2
present = element in tuple_10
print(f"Is {element} present in tuple_10? {present}")

# Comparison
same = tuple_10 is tuple_12
print("Are both tuples the same?", same)
