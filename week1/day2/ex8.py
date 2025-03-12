def ask_questions(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for question in data:
        user_answer = input(f"{question['question']} ")
        if user_answer.strip().lower() == question['answer'].lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": question['question'],
                "user_answer": user_answer,
                "correct_answer": question['answer']
            })

    return correct_answers, incorrect_answers, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct answer(s) and {incorrect} incorrect answer(s).")
    if incorrect > 0:
        print("\nHere are the questions you answered incorrectly:")
        for wrong in wrong_answers:
            print(f"Question: {wrong['question']}")
            print(f"Your answer: {wrong['user_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}\n")
    if incorrect > 3:
        print("\nYou got more than 3 wrong answers. Would you like to play again?")
        play_again = input("Enter 'yes' to play again or 'no' to quit: ").strip().lower()
        return play_again == "yes"
    return False

def start_quiz():
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]

    while True:
        correct, incorrect, wrong_answers = ask_questions(data)
        play_again = show_results(correct, incorrect, wrong_answers)
        if not play_again:
            print("Thanks for playing the Star Wars quiz!")
            break

# Start the quiz
start_quiz()
