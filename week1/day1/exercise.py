#Exercise 1 : Hello World

print("Hello world", "Hello world", "Hello world", "Hello world")

#Exercise 2 : Some Math
print(99**3)*8

#Exercise 3 : What's your name?
my_name = "Anas"
user_name = input("What's your name? ")

if user_name.lower() == my_name.lower():
    print("Wow! We have the same name! Are we twins? 🤯")
else:
    print(f"Nice to meet you, {user_name}! But I think my name is cooler. 😎")

#Exercise 4 : Tall enough to ride a roller coaster?
height = int(input("Enter your height in cm: "))

if height > 145:
    print("You're tall enough to ride! 🎢")
else:
    print("You need to grow some more to ride. 📏")

#Exercise 5 : Favorite numbers
my_fav_numbers = {7, 14, 21}
my_fav_numbers.add(42)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)
friend_fav_numbers = {3, 8, 15}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)

#Exercise 6 : Tuple

my_tuple = (1, 2, 3)
new_tuple = my_tuple + (4, 5)  
print(new_tuple
      
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

#Exercise 8 : sandwich orders
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print(f"I made your {sandwich.lower()}")