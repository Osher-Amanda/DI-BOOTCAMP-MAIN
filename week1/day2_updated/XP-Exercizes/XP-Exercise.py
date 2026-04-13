# Exercise 1
my_fav_numbers = {3, 7, 21}            # create a set with some favorite numbers
# Add two new numbers
my_fav_numbers.add(9)
last_added = 11
my_fav_numbers.add(last_added)         # remember the last one we added in a variable

# Remove the last number that we added
my_fav_numbers.remove(last_added)

# Friend's favorites and combine (union)
friend_fav_numbers = {2, 11, 25}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("Mine:", my_fav_numbers)
print("Friend's:", friend_fav_numbers)
print("Ours (union):", our_fav_numbers)
Explanation (very short):

set stores unique items (unordered).

add() inserts; we saved the last-added value in last_added so we can remove it.

union() combines sets without duplicates.

Exercise 2 — Tuple (immutability)
python
Copy
Edit
# Exercise 2
nums = (1, 2, 3)
print("Original tuple:", nums)

# Trying to change a tuple raises an error; show it safely:
try:
    nums.append(4)   # tuples have no append -> AttributeError
except Exception as e:
    print("Cannot change tuple in-place:", type(e).__name__)

# To "add" numbers, create a new tuple (concatenation)
nums = nums + (4, 5)
print("New tuple (created by concatenation):", nums)
Explanation (very short):

Tuples are immutable: you cannot change them in-place.

To add values you make a new tuple (e.g., old + (new,)).

Exercise 3 — List Manipulation
python
Copy
Edit
# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove Banana and Blueberries
basket.remove("Banana")
basket.remove("Blueberries")
# Add Kiwi to the end
basket.append("Kiwi")
# Add Apples to the beginning
basket.insert(0, "Apples")
# Count how many "Apples"
apple_count = basket.count("Apples")
print("Before clearing:", basket, "| Apples count:", apple_count)
# Empty the list
basket.clear()
print("After clearing:", basket)
Explanation (very short):

remove() deletes a value, append() adds to end, insert(0, ...) adds at start.

count() shows how many times an item appears. clear() empties the list.

Exercise 4 — Floats (generate sequence)
python
Copy
Edit
# Exercise 4
# A float is a number with a decimal (e.g., 1.5). An integer has no decimal (e.g., 2).
# Generate 1.5, 2, 2.5, ..., 5 without typing each number:
sequence = [1.5 + 0.5 * i for i in range(8)]
print(sequence)
Explanation (very short):

Used a list comprehension and a 0.5 step to create the mixed float/integer sequence automatically.

Exercise 5 — For Loop (1 to 20 & even-indexed)
python
Copy
Edit
# Exercise 5
# Print 1 to 20
for i in range(1, 21):
    print(i)

print("--- Even-indexed positions (2nd, 4th, ...) ---")
# Print numbers whose index in the sequence is even (using enumerate start=1)
for index, number in enumerate(range(1, 21), start=1):
    if index % 2 == 0:
        print(number)
Explanation (very short):

range(1,21) gives numbers 1..20.

enumerate(..., start=1) lets us test the position (index) and print those at even positions.

Exercise 6 — While Loop (stop when user types the name)
python
Copy
Edit
# Exercise 6
my_name = "ChatGPT"   # change this to whatever "your name" should be
while True:
    name = input(f"Enter your name (type '{my_name}' to stop): ")
    if name == my_name:
        print("Name matched — stopping the loop.")
        break
    else:
        print("Not the same — try again.")
Explanation (very short):

Loop keeps asking until the user types the target name; then break stops it.

Exercise 7 — Favorite Fruits
python
Copy
Edit
# Exercise 7
fruits_input = input("Enter your favorite fruits (separate with spaces): ")
favorite_fruits = [f.strip().lower() for f in fruits_input.split() if f.strip()]

fruit = input("Name a fruit: ").strip().lower()
if fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
Explanation (very short):

We split the input into a list, normalize to lowercase for reliable comparison, then check membership.

Exercise 8 — Pizza Toppings
python
Copy
Edit
# Exercise 8
toppings = []
while True:
    topping = input("Enter a topping (or 'quit' to finish): ").strip()
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

print("Toppings you chose:", toppings)
total_cost = 10 + len(toppings) * 2.50
print(f"Total pizza cost: ${total_cost:.2f}")
Explanation (very short):

Collect toppings until user types quit. Each topping costs $2.50 on top of the $10 base price.

Exercise 9 — Cinemax Tickets (and bonus)
python
Copy
Edit
# Exercise 9
ages_input = input("Enter ages of family members separated by spaces: ")
ages = [int(x) for x in ages_input.split() if x.strip().isdigit()]

total_cost = 0
for age in ages:
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_cost += price

print(f"Total ticket cost: ${total_cost}")

# Bonus: filter a group for allowed ages 16-21
group_input = input("Bonus - Enter ages for the restricted movie (space-separated): ")
group_ages = [int(x) for x in group_input.split() if x.strip().isdigit()]
allowed_attendees = [a for a in group_ages if 16 <= a <= 21]
print("Final list of allowed attendees (ages 16–21):", allowed_attendees)
Explanation (very short):

Compute each person's price by age rules and sum them.

Bonus: keep only ages between 16 and 21 inclusive.

Exercise 10 — Sandwich Orders
python
Copy
Edit
# Exercise 10
sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
print("Original orders:", sandwich_orders)

# Remove all "Pastrami"
while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")

finished_sandwiches = []
# Make the sandwiches one by one
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print(f"I made your {sandwich} sandwich.")

print("All finished sandwiches:", finished_sandwiches)
Explanation (very short):

Use a loop to remove every "Pastrami" from the order list.

Then make each remaining sandwich, move it to finished_sandwiches, and print a message.