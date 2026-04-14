# Exercise 1: Quiz

# 1. What is a class?
# A blueprint or template used to create objects. It defines what data they hold and what they can do.

# 2. What is an instance?
# A specific object created from a class. If 'Dog' is the class, your pet 'Rex' is the instance.

# 3. What is encapsulation?
# Keeping data and the methods that use that data grouped together in one unit, often hiding the internal workings.

# 4. What is abstraction?
# Showing only the necessary features of an object while hiding the complex background logic.

# 5. What is inheritance?
# When one class (the child) takes all the features of another class (the parent) so you don't have to rewrite code.

# 6. What is multiple inheritance?
# When a child class inherits features from more than one parent class at the same time.

# 7. What is polymorphism?
# The ability of different objects to be used in the same way, even if they behave differently inside.

# 8. What is method resolution order or MRO?
# The specific order Python follows to look for a method when it's called, especially in complex inheritance.


# Exercise 2: Create a deck of cards class

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        # This helps the card display as "A of Hearts" instead of a memory address
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.cards = []
        self.build_deck()

    def build_deck(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        # Creating all 52 card combinations
        self.cards = [Card(s, v) for s in suits for v in values]

    def shuffle(self):
        # Check if the deck is complete before shuffling
        if len(self.cards) < 52:
            self.build_deck()
        random.shuffle(self.cards)
        print("The deck has been shuffled.")

    def deal(self):
        # .pop() removes the last card from the list and returns it
        if len(self.cards) > 0:
            return self.cards.pop()
        return "No more cards in the deck."

# --- Testing the code ---
my_deck = Deck()
my_deck.shuffle()
print(f"First card dealt: {my_deck.deal()}")
print(f"Second card dealt: {my_deck.deal()}")
print(f"Remaining cards: {len(my_deck.cards)}")

# Explanation:
# 1. The Card class simply stores the suit and value for every individual card.
# 2. The Deck class creates a list of 52 Card instances using a nested loop.
# 3. shuffle() uses the random module to mix the card objects inside the list.
# 4. deal() uses pop() because it's the easiest way to give a card and remove it from the deck in one step.