# ==========================================
# Exercise 1: Converting Lists into Dictionaries
# ==========================================

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# We use the zip() function to pair the elements together
# and the dict() function to turn those pairs into a dictionary.
result = dict(zip(keys, values))

print("Exercise 1 Output:")
print(result)
print("-" * 30)


# ==========================================
# Exercise 2: Cinemax #2
# ==========================================

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

print("Exercise 2: Ticket Prices")

# We loop through the dictionary using .items() to get both the name and the age
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name.capitalize()} owes ${price}")
    total_cost += price

print(f"Total Cost for the family: ${total_cost}")
print("-" * 30)


# ==========================================
# Exercise 3: Zara
# ==========================================

# 1. Create the dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Change number_stores
brand["number_stores"] = 2

# 3. Print sentence about clients
# We join the list items into a string for a nice sentence
clothes = ", ".join(brand["type_of_clothes"][:-1]) # men, women, children
print(f"Zara's clients are looking for {clothes} and {brand['type_of_clothes'][-1]} items.")

# 4. Add country_creation
brand["country_creation"] = "Spain"

# 5. Check competitors and add Desigual
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete creation_date
brand.pop("creation_date")

# 7. Print last item in competitors
print(f"Last competitor: {brand['international_competitors'][-1]}")

# 8. Print major colors in US
print(f"US Colors: {brand['major_color']['US']}")

# 9. Print number of keys
print(f"Number of keys: {len(brand)}")

# 10. Print all keys
print(f"Keys: {list(brand.keys())}")

# Bonus: Merge dictionaries
more_on_zara = {"creation_date": 1975, "number_stores": 10000}
brand.update(more_on_zara) # .update() merges and overwrites existing keys
print(f"Merged Dictionary: {brand}")
print("-" * 30)


# ==========================================
# Exercise 4: Disney Characters
# ==========================================

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. Map characters to indices
# enumerate() gives us both the index (i) and the value (user)
disney_1 = {user: i for i, user in enumerate(users)}
print(f"Pattern 1: {disney_1}")

# 2. Map indices to characters
disney_2 = {i: user for i, user in enumerate(users)}
print(f"Pattern 2: {disney_2}")

# 3. Sorted alphabetically then mapped to indices
sorted_users = sorted(users)
disney_3 = {user: i for i, user in enumerate(sorted_users)}
print(f"Pattern 3: {disney_3}")