# ten_string_tools.py

# 1) Keep asking until the user types exactly 10 characters
while True:
    s = input("Enter a string that is exactly 10 characters long: ")

    # len(s) returns how many characters are in the string 's'
    n = len(s)

    if n < 10:
        # f-strings let us print values inside {}
        print(f"String not long enough. You typed {n} characters; you need {10 - n} more.\n")
    elif n > 10:
        print(f"String too long. You typed {n} characters; please delete {n - 10}.\n")
    else:
        print("Perfect string\n")
        break  # Exit the loop once it's exactly 10


# 2) "Proceed": show useful info about the valid string
print("Details about your string:\n")

# First and last characters (indexing)
print(f"First character: {s[0]}")
print(f"Last character:  {s[-1]}")

# Show every character with its index using enumerate
print("\nIndex : Character")
for i, ch in enumerate(s):
    print(f"{i:>5} : {ch}")

# Show the reversed string using slicing
print("\nReversed string:", s[::-1])

# Optional: show a simple 'mask' to visualize exactly 10 positions
print("\nPosition guide:  0 1 2 3 4 5 6 7 8 9")
print("Your string:    ", " ".join(list(s)))


####