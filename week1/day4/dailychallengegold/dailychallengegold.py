import re

# The raw string provided
MATRIX_STR = '''7ir
Tsi
h%x
i ?
sM#
$a
#t%'''

# --- Step 1: Transform the string into a 2D list ---

rows = MATRIX_STR.split("\n")

# Number of rows
num_rows = len(rows)

# Find the longest row instead of assuming they're all equal
num_cols = max(len(row) for row in rows)

# --- Step 2 & 3: Read the matrix column by column ---

decoded_chars = []

for col in range(num_cols):
    for row in range(num_rows):

        # Only access the character if this row is long enough
        if col < len(rows[row]):
            decoded_chars.append(rows[row][col])

# Convert list into a string
raw_decoded = "".join(decoded_chars)

# --- Step 4: Replace symbols between letters with a space ---

final_message = re.sub(
    r'(?<=[A-Za-z])[^A-Za-z]+(?=[A-Za-z])',
    ' ',
    raw_decoded
)

# --- Step 5: Keep only letters and spaces ---

clean_chars = []

for char in final_message:
    if char.isalpha() or char == " ":
        clean_chars.append(char)

clean_message = "".join(clean_chars).strip()

print("Secret Message:", clean_message)