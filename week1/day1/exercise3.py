#Exercise 3 : What's your name?
my_name = "Anas"
user_name = input("What's your name? ")

if user_name.lower() == my_name.lower():
    print("Wow! We have the same name! Are we twins? 🤯")
else:
    print(f"Nice to meet you, {user_name}! But I think my name is cooler. 😎")
