import random

def generate_random_number(user_number):
    if 1 <= user_number <= 100:
        random_number = random.randint(1, 100)
        if user_number == random_number:
            print("Success! You guessed the correct number!")
        else:
            print(f"Fail! Your number: {user_number}, Random number: {random_number}")
    else:
        print("Please enter a number between 1 and 100.")