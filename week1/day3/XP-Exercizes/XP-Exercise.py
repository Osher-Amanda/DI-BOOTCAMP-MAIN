# =========================
# Exercise 1: Converting Lists into Dictionaries
# =========================

# Step 1: Create lists of keys and values
keys = ['Ten', 'Twenty', 'Thirty']  # list of keys
values = [10, 20, 30]              # list of corresponding values

# Step 2: Pair each key with its value using zip and convert to dictionary
my_dict = dict(zip(keys, values))

# Step 3: Print the resulting dictionary
print("=== Exercise 1 Output ===")
print(my_dict)
print("\n")  # Add a blank line for readability


# =========================
# Exercise 2: Cinemax #2
# =========================

# Step 1: Create a dictionary with family members and their ages
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

# Step 2: Initialize total cost
total_cost = 0

print("=== Exercise 2 Output ===")

# Step 3: Loop through each family member
for name, age in family.items():
    # Step 4: Determine ticket price based on age
    if age < 3:
        price = 0       # under 3 years old: free
    elif 3 <= age <= 12:
        price = 10      # 3 to 12 years old: $10
    else:
        price = 15      # over 12 years old: $15

    # Step 5: Print individual ticket price
    print(f"{name} has to pay ${price}")

    # Step 6: Add price to total cost
    total_cost += price

# Step 7: Print total ticket cost
print(f"Total ticket cost for the family: ${total_cost}")
print("\n")


# =========================
# Exercise 3: Zara
# =========================

# Step 1: Create dictionary with Zara brand information
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]}
}

# Step 2: Update number of stores
brand["number_stores"] = 2

print("=== Exercise 3 Output ===")

# Step 3: Print sentence describing Zara's clients
print(f"Zara sells {', '.join(brand['type_of_clothes'])} clothing.")

# Step 4: Add new key country_creation
brand["country_creation"] = "Spain"

# Step 5: If international_competitors exists, add "Desigual"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Step 6: Remove creation_date key
brand.pop("creation_date", None)

# Step 7: Print last international competitor
print("Last international competitor:", brand["international_competitors"][-1])

# Step 8: Print major colors in US
print("Major colors in US:", brand["major_color"]["US"])

# Step 9: Print number of keys in brand dictionary
print("Number of keys in brand dictionary:", len(brand))

# Step 10: Print all keys of the dictionary
print("Keys in brand dictionary:", list(brand.keys()))

# Step 11: Bonus - Merge another dictionary
more_on_zara = {"creation_date": 1975, "number_stores": 10000}
brand.update(more_on_zara)
print("After merging more_on_zara dictionary:", brand)
print("\n")


# =========================
# Exercise 4: Disney Characters
# =========================

# Step 1: Create a list of Disney characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Step 2: Create dictionary mapping characters to indices
char_to_index = {user: idx for idx, user in enumerate(users)}

# Step 3: Create dictionary mapping indices to characters
index_to_char = {idx: user for idx, user in enumerate(users)}

# Step 4: Sort characters alphabetically
sorted_users = sorted(users)

# Step 5: Create dictionary mapping alphabetically sorted characters to indices
sorted_dict = {user: idx for idx, user in enumerate(sorted_users)}

print("=== Exercise 4 Output ===")
print("Character to index:", char_to_index)
print("Index to character:", index_to_char)
print("Alphabetically sorted dictionary:", sorted_dict)