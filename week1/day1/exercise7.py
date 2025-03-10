#Exercise 7 : List

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove Banana
basket.remove("Banana")

# Remove Blueberries
basket.remove("Blueberries")

# Add Kiwi to the end
basket.append("Kiwi")

# Add Apples to the beginning
basket.insert(0, "Apples")

# Count Apples
apple_count = basket.count("Apples")
print(f"Number of Apples: {apple_count}")

# Empty the basket
basket.clear()

# Print the basket
print(basket)  # Output: []
