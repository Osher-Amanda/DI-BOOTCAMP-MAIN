import random  # for the bonus shuffle step

# 1. Ask for User Input
user_string = input("Enter a string that is exactly 10 characters long: ")

# 2. Check the length of the string
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else:
    print("Perfect string")

    # 3. Print the first and last characters
    print("First character:", user_string[0])   # index 0 = first character
    print("Last character:", user_string[-1])   # index -1 = last character

    # 4. Build the string character by character
    print("\nBuilding string step by step:")
    for i in range(1, len(user_string) + 1):  
        # i goes from 1 → 10
        print(user_string[:i])  
        # user_string[:i] means "take the first i characters"

    # 5. Bonus: Jumble the string
    chars = list(user_string)       # convert string into list of characters
    random.shuffle(chars)           # shuffle the list in place
    jumbled = ''.join(chars)        # join list back into a string
    print("\nJumbled string:", jumbled)





#Explanation
#input() → Asks the user to type a string.

#len(user_string) → Counts how many characters are in the string.

#< 10 → print “not long enough”

#> 10 → print “too long”

#== 10 → proceed

#First/Last characters:

#user_string[0] → first character (indexing starts at 0).

#user_string[-1] → last character (negative index counts backwards).

#For loop (for i in range(1, len(user_string)+1):)

#Starts at 1 → prints the first character.

#Then 2 → prints the first 2 characters.

#Keeps going until all 10 are shown.

#user_string[:i] is slicing: it takes characters from the start up to i.

#Bonus shuffle:

#Convert string → list, because shuffle() works on lists.

#Shuffle → rearranges randomly.

#''.join(list) → joins list back into one string.