import re

# The raw string provided
MATRIX_STR = '''7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

# --- Step 1: Transforming the String into a 2D List ---
# We split the big string into a list of rows (lines)
rows = MATRIX_STR.split('\n')
# We find out how many rows and columns we have
num_rows = len(rows)
num_cols = len(rows[0])

# --- Step 2 & 3: Processing Columns & Filtering Alpha Characters ---
raw_decoded = ""

# We use a "nested loop": 
# First we pick a column (0, then 1, then 2...)
for col in range(num_cols):
    # Then we go down every row in THAT column
    for row in range(num_rows):
        # We grab the character at that specific spot
        char = rows[row][col]
        # We add every single character to a long string in order
        raw_decoded += char

# --- Step 4 & 5: Replacing Symbols and Printing ---
# This part is a bit tricky: we need to find symbols 
# that are trapped BETWEEN letters and turn them into a single space.

# I used a "Regular Expression" (re). 
# This specific pattern looks for non-letter characters ([^a-zA-Z]+) 
# that have letters on both sides.
import re

# This finds any group of symbols located between letters and replaces them with one space
# [a-zA-Z] means a letter, [^a-zA-Z]+ means one or more symbols
final_message = re.sub(r'(?<=[a-zA-Z])[^a-zA-Z]+(?=[a-zA-Z])', ' ', raw_decoded)

# I also want to clean up any leftover symbols at the very start or end
# so thatthe message looks nice and pretty.
# (This step isn't strictly in the instructions but makes the output readable!)
clean_message = ""
for char in final_message:
    if char.isalpha() or char == " ":
        clean_message += char

print("Secret Message:", clean_message.strip())