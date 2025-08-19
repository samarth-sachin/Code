# Given values
N = 5
remaining_cards = [1, 2, 4, 5]

# Calculate the sum of all numbers from 1 to N
total_sum = N * (N + 1) // 2

# Calculate the sum of the remaining cards
remaining_sum = sum(remaining_cards)

# The lost card's number is the difference between the total sum and the remaining sum
lost_card = total_sum - remaining_sum

# Output the result
print("The lost card's number is:", lost_card)
