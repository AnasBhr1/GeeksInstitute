import random

def get_random_temp(season):
    if season == "winter":
        lower, upper = -10, 16
    elif season == "spring":
        lower, upper = 0, 20
    elif season == "summer":
        lower, upper = 20, 40
    elif season == "autumn":
        lower, upper = 10, 25
    else:
        return "Invalid season"

    temp = random.uniform(lower, upper)  # Random float number between lower and upper
    return round(temp, 1)  # Round to one decimal point for precision

def main():
    month = int(input("Enter the number of the month (1-12): "))

    # Determine the season based on the month
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    else:
        season = "autumn"

    # Get a random temperature based on the season
    temperature = get_random_temp(season)
    if isinstance(temperature, str):
        print(temperature)
        return

    print(f"The temperature right now is {temperature} degrees Celsius.")

    # Provide friendly advice based on the temperature
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temperature <= 23:
        print("The weather is nice. A light jacket should be enough.")
    elif 24 <= temperature <= 32:
        print("It’s warm! Stay hydrated and enjoy the sunshine.")
    elif 32 < temperature <= 40:
        print("It’s hot! Be sure to stay cool and wear sunscreen.")

# Call the main function to test the program
main()
