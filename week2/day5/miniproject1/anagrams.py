# anagrams.py

from anagram_checker import AnagramChecker

def main():
    # # Created an instance of AnagramChecker with the words file
    checker = AnagramChecker("words_alpha.txt")

    while True:
        print("\n--- Anagram Checker ---")
        print("1. Enter a word")
        print("2. Exit")
        choice = input("Choose an option: ")

        if choice == "2":
            print("Goodbye!")
            break
        elif choice == "1":
            user_input = input("Enter a word: ").strip()  # # Remove whitespace

            # # Validate input
            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue
            if len(user_input.split()) > 1:
                print("Error: Only a single word is allowed.")
                continue

            word = user_input.lower()

            # # Check if valid English word
            if checker.is_valid_word(word):
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is a valid English word.")
                anagrams = checker.get_anagrams(word)
                if anagrams:
                    print("Anagrams for your word:", ", ".join(anagrams))
                else:
                    print("No anagrams found for your word.")
            else:
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is NOT a valid English word.")
        else:
            print("Invalid choice. Please select 1 or 2.")

if __name__ == "__main__":
    main()

    # Displays a menu with options to enter a word or exit.
# Cleans the user input with .strip().
# Checks that input is alphabetic and only a single word.
# Uses the AnagramChecker class to check validity and find anagrams.
# Displays results in a user-friendly format.

from anagram_checker import AnagramChecker

