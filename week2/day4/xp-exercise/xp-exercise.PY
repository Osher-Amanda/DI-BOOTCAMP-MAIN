# Exercise 1: Random Sentence Generator
import random

def get_words_from_file(file_path):
    with open(file_path, "r") as f:
        # We read the file and split it into a list immediately
        return f.read().split()

def get_random_sentence(length, words):
    # This picks random words and joins them with spaces in one line
    return " ".join(random.choice(words) for _ in range(length)).lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    user_input = input("How long do you want the sentence to be (2-20)? ")
    
    # Check if input is a digit and within range to avoid deep nesting
    if not user_input.isdigit():
        print("Error: That's not a valid number.")
        return

    length = int(user_input)
    if not (2 <= length <= 20):
        print("Error: Number must be between 2 and 20.")
        return

    try:
        all_words = get_words_from_file("words.txt")
        print(f"Result: {get_random_sentence(length, all_words)}")
    except FileNotFoundError:
        print("Error: words.txt file is missing.")

if __name__ == "__main__":
    main()

# Explanation: 
# 1. get_words_from_file opens the text file and turns it into a list of words.
# 2. get_random_sentence uses a loop to pick random words and lowercase them.
# 3. main handles the user's input and checks if the number is between 2 and 20.


# Exercise 2: Working with JSON
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Step 1: Convert string to dictionary
data = json.loads(sampleJson)

# Step 2: Access salary directly
salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")

# Step 3: Add birth_date to the employee section
data["company"]["employee"]["birth_date"] = "1990-01-01"

# Step 4: Save to file with 4-space indentation for readability
with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

# Explanation:
# 1. json.loads turns the text into a dictionary we can edit.
# 2. We access nested keys by putting the labels in brackets one after another.
# 3. json.dump saves our changes into a new file called 'data.json'.