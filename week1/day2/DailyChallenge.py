def map_letter_positions(word):
    letter_positions = {}
    
    for index, letter in enumerate(word):
        if letter not in letter_positions:
            letter_positions[letter] = []
        letter_positions[letter].append(index)
    
    return letter_positions

# Get user input
word = input("Enter a word: ").strip().lower()
result = map_letter_positions(word)

print(result)
