# --- CHALLENGE 1: Multiples of a Number ---
print("--- Challenge 1: Multiples ---")

# 1. Ask the user for two inputs
num = int(input("Enter a number: "))
count = int(input("Enter a length: "))

# 2. Generate the list using a loop and list appending
multiples = []
for i in range(1, count + 1):
    multiples.append(num * i)

# 3. Print the resulting list
print(f"Output: {multiples}\n")


# --- CHALLENGE 2: Remove Consecutive Duplicate Letters ---
print("--- Challenge 2: String Cleaner ---")

# 1. Ask the user for a string
user_word = input("Enter a word with duplicates: ")

# 2. Process the string to remove consecutive duplicates
cleaned_word = ""
for char in user_word:
    # If the result is empty OR the character is different from the last added char
    if len(cleaned_word) == 0 or char != cleaned_word[-1]:
        cleaned_word += char

# 3. Print the modified string
print(f"Output: {cleaned_word}")