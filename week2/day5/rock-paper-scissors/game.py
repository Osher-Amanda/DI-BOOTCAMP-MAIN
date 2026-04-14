# We import the random module because the computer will pick rock/paper/scissors randomly
import random  

# We create a class called Game to contain all the game logic
class Game:

    # This method will ask the user to type rock, paper, or scissors
    def get_user_item(self):
        # We ask the user for input
        user_choice = input("Choose rock, paper, or scissors: ").lower().strip()
        # We make sure the user typed something valid
        while user_choice not in ["rock", "paper", "scissors"]:
            print("Invalid choice. Please try again.")
            user_choice = input("Choose rock, paper, or scissors: ").lower().strip()
        # Once the input is valid, return it to the program
        return user_choice

    # This method will randomly pick rock/paper/scissors for the computer
    def get_computer_item(self):
        # random.choice randomly picks one item from the list
        computer_choice = random.choice(["rock", "paper", "scissors"])
        return computer_choice

    # This method will decide if the user won, lost, or drew
    def get_game_result(self, user_item, computer_item):
        # If both picked the same, it's a draw
        if user_item == computer_item:
            return "draw"
        # Rules: rock beats scissors, paper beats rock, scissors beats paper
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "win"
        # If none of the above, the user lost
        else:
            return "loss"

    # This method ties everything together
    def play(self):
        # First we get the user's choice
        user_item = self.get_user_item()
        # Then we get the computer's choice
        computer_item = self.get_computer_item()
        # Then we determine who won
        result = self.get_game_result(user_item, computer_item)
        # We print the result in a user-friendly way
        print(f"You chose: {user_item}, Computer chose: {computer_item}. Result: {result}")
        # We return the result so the main program can track scores
        return result
    



    # game.py
import random  # # We import the random module to let the computer pick randomly

# # We define a class called Game to hold all the game logic
class Game:

    # # Method to get the user's choice
    def get_user_item(self):
        # # Ask the user to type rock, paper, or scissors
        user_choice = input("Type rock, paper, or scissors: ").lower().strip()
        
        # # Validate input: if not valid, keep asking
        while user_choice not in ["rock", "paper", "scissors"]:
            # # Tell the user the input is invalid
            print("Invalid choice. Please choose rock, paper, or scissors.")
            # # Ask again
            user_choice = input("Type rock, paper, or scissors: ").lower().strip()
        
        # # Return the valid user choice
        return user_choice

    # # Method to randomly select the computer's choice
    def get_computer_item(self):
        # # random.choice picks one item from the list randomly
        return random.choice(["rock", "paper", "scissors"])

    # # Method to decide who wins
    def get_game_result(self, user_item, computer_item):
        # # If both choices are the same, it is a draw
        if user_item == computer_item:
            return "draw"
        # # Rules: rock beats scissors, scissors beats paper, paper beats rock
        elif (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "scissors" and computer_item == "paper") or
            (user_item == "paper" and computer_item == "rock")
        ):
            # # User wins
            return "win"
        else:
            # # Otherwise, user loses
            return "loss"

    # # Method to play a full round of the game
    def play(self):
        # # Get the user's choice
        user_item = self.get_user_item()
        # # Get the computer's choice
        computer_item = self.get_computer_item()
        # # Determine the result
        result = self.get_game_result(user_item, computer_item)
        # # Print the results in a user-friendly way
        print(f"\nYou chose: {user_item}")
        print(f"Computer chose: {computer_item}")
        print(f"Result: {result}\n")
        # # Return the result so it can be tracked by the main program
        return result