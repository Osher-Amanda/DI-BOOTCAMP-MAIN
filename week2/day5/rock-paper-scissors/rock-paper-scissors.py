# We import the Game class from game.py
from game import Game  

# Function to show the menu and get the user's choice
def get_user_menu_choice():
    print("\n--- Rock Paper Scissors Menu ---")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

    # We ask the user for input
    choice = input("Enter your choice (1-3): ").strip()

    # If the choice is not valid, we keep asking
    while choice not in ["1", "2", "3"]:
        print("Invalid input. Please try again.")
        choice = input("Enter your choice (1-3): ").strip()

    return choice

# Function to display results
def print_results(results):
    print("\n--- Game Results ---")
    # results is a dictionary like {"win": 2, "loss": 3, "draw": 1}
    print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
    print("Thanks for playing!")

# The main function to run the program
def main():
    # We create a dictionary to keep track of results
    results = {"win": 0, "loss": 0, "draw": 0}

    # We keep showing the menu until the user chooses to quit
    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            # Play a new game
            game = Game()
            result = game.play()
            # We add +1 to the result type (win, loss, or draw)
            results[result] += 1

        elif choice == "2":
            # Show current scores
            print_results(results)

        elif choice == "3":
            # Quit and show final results
            print_results(results)
            break  # Exit the loop

# This ensures the program only runs when started directly
if __name__ == "__main__":
    main()



# How it works when you run rock-paper-scissors.py

# The menu shows:

# 1. Play a new game
# 2. Show scores
# 3. Quit

# If you choose 1:
# It asks you to type rock, paper, or scissors.
# The computer randomly picks one.
# The result is shown (win, loss, or draw).
# If you choose 2:
# It shows your current scores.
# If you choose 3:
# It shows the final scores and exits.

#If you type 1, you play a game.
#If you type 2, you see your current scores.
#If you type 3, the program shows your final scores and quits.




