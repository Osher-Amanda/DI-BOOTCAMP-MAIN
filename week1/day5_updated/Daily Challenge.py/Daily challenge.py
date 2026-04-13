# =========================
# Challenge 1: Sorting
# =========================

# Step 1: Get Input
user_input = input("Enter words separated by commas: ")

# Step 2: Split the String
words_list = user_input.split(",")  # split() turns the string into a list of words

# Step 3: Sort the List
words_list.sort()  # sort() arranges the words alphabetically

# Step 4: Join the Sorted List
sorted_string = ",".join(words_list)  # join() turns the list back into a single string separated by commas

# Step 5: Print the Result
print("Sorted words:", sorted_string)

# -------------------------
# Explanation (Step by Step):
# -------------------------
# 1. input() collects a string from the user. Example input: "without,hello,bag,world"
# 2. split(",") breaks the string into a list where each word becomes an element: ['without', 'hello', 'bag', 'world']
# 3. sort() rearranges the list in alphabetical order: ['bag', 'hello', 'without', 'world']
# 4. ",".join(words_list) converts the list back into a single string with commas between words: "bag,hello,without,world"
# 5. print() displays the final sorted string to the user.

# =========================
# Challenge 2: Longest Word
# =========================

# Step 1: Define the Function
def longest_word(sentence):
    # Step 2: Split the Sentence into Words
    words = sentence.split()  # split() without arguments splits at spaces
    
    # Step 3: Initialize Variables
    max_length = 0
    longest = ""
    
    # Step 4: Iterate Through the Words
    for word in words:
        # Step 5: Compare Word Lengths
        if len(word) > max_length:
            max_length = len(word)  # store new max length
            longest = word          # store the corresponding word
    
    # Step 6: Return the Longest Word
    return longest

# -------------------------
# Test the function
print(longest_word("Margaret's toy is a pretty doll."))       # Output: "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))    # Output: "forever."
print(longest_word("Forgetfulness is by all means powerless!")) # Output: "Forgetfulness"

# -------------------------
# Explanation (Step by Step):
# -------------------------
# 1. We define a function longest_word(sentence) that accepts a sentence as input.
# 2. sentence.split() creates a list of words from the sentence by splitting at spaces.
#    Example: "Margaret's toy is a pretty doll." -> ["Margaret's", "toy", "is", "a", "pretty", "doll."]
# 3. Initialize max_length as 0 and longest as an empty string to keep track of the longest word found so far.
# 4. We loop through each word in the list.
# 5. For each word, we check its length with len(word). If it is longer than max_length, we update max_length and store that word in longest.
# 6. After checking all words, we return the longest word found.