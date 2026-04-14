# --- CHALLENGE 1: Letter Index Dictionary ---
print("--- Challenge 1: Letter Index ---")

# 1. Ask the user for a word
word = input("Enter a word: ")

# 2. Create the dictionary
letter_indices = {}

# We use enumerate to get both the index (i) and the character (char)
for i, char in enumerate(word):
    if char in letter_indices:
        # If key exists, append the current index to the list
        letter_indices[char].append(i)
    else:
        # If key doesn't exist, create it with a new list containing the index
        letter_indices[char] = [i]

# 3. Print the result
print(f"Output: {letter_indices}\n")


# --- CHALLENGE 2: Affordable Items ---
print("--- Challenge 2: Affordable Items ---")

# Example Data (You can change these values to test different scenarios)
items_purchase = {
    "Water": "$1", 
    "Bread": "$3", 
    "TV": "$1,000", 
    "Fertilizer": "$20"
}
wallet_str = "$300"

# 1. Data Cleaning: Convert wallet string to an integer
# Removes '$' and ',' then converts to int
wallet_amount = int(wallet_str.replace("$", "").replace(",", ""))

basket = []

# 2. Process Items
for item, price_str in items_purchase.items():
    # Clean the price string (remove $ and ,) and convert to int
    price = int(price_str.replace("$", "").replace(",", ""))
    
    # Check if we can afford it
    if wallet_amount >= price:
        basket.append(item)
        wallet_amount -= price # Update the wallet after purchase

# 3. Handle Output
if not basket:
    print("Output: Nothing")
else:
    # Sort the basket alphabetically before printing
    print(f"Output: {sorted(basket)}")