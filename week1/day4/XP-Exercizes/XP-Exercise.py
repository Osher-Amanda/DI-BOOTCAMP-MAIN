# =========================
# Exercise 1: What Are You Learning?
# =========================

# Step 1: Define a function that takes no parameters
def display_message():
    # Step 2: Print a message about learning
    print("I am learning about functions in Python.")

# Step 3: Call the function
display_message()
print("\n")


# =========================
# Exercise 2: What's Your Favorite Book?
# =========================

# Step 1: Define a function that takes a parameter 'title'
def favorite_book(title):
    # Step 2: Print a message including the book title
    print(f"One of my favorite books is {title}.")

# Step 3: Call the function with a book title
favorite_book("Alice in Wonderland")
print("\n")


# =========================
# Exercise 3: Some Geography
# =========================

# Step 1: Define a function with two parameters: city and country (default='Unknown')
def describe_city(city, country="Unknown"):
    # Step 2: Print a message combining city and country
    print(f"{city} is in {country}.")

# Step 3: Call the function with and without the country argument
describe_city("Reykjavik", "Iceland")
describe_city("Paris")
print("\n")


# =========================
# Exercise 4: Random Number Comparison
# =========================

# Step 1: Import random module
import random

# Step 2: Define a function that accepts a number
def compare_random(user_number):
    # Step 3: Generate a random number between 1 and 100
    random_number = random.randint(1, 100)
    # Step 4: Compare numbers and print result
    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

# Step 5: Call the function with a number
compare_random(50)
print("\n")


# =========================
# Exercise 5: Personalized Shirts
# =========================

# Step 1 & 4: Define a function with default parameters
def make_shirt(size="large", text="I love Python"):
    # Step 2: Print a summary message
    print(f"The size of the shirt is {size} and the text is {text}.")

# Step 5: Call the function with default and custom values
make_shirt()                               # default large shirt
make_shirt(size="medium")                  # medium with default text
make_shirt(size="small", text="Custom message")  # small with custom text

print("\n")


# =========================
# Exercise 6: Magicians
# =========================

# Step 1: Create a list of magician names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Step 2: Function to display magicians
def show_magicians(names):
    for name in names:
        print(name)

# Step 3: Function to modify names
def make_great(names):
    for i in range(len(names)):
        names[i] += " the Great"

# Step 4: Call functions
make_great(magician_names)
show_magicians(magician_names)
print("\n")


# =========================
# Exercise 7: Temperature Advice
# =========================

# Step 1: Function to get random temperature
def get_random_temp():
    # Bonus Step 4: random float for more realistic temp
    return round(random.uniform(-10, 40), 1)

# Step 2 & 3: Main function
def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")

    # Step 3: Provide advice based on temperature
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather.")
    elif 24 <= temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

# Step 5: Call main function
main()

# =========================
# Exercise 1: What Are You Learning?
# =========================
# Step 1: Defined a function called display_message() with no parameters.
# Step 2: Inside the function, used print() to display "I am learning about functions in Python."
# Step 3: Calling display_message() executed the code inside the function and printed the message.
# Outcome: You see the message printed because calling the function runs its code.

# =========================
# Exercise 2: What's Your Favorite Book?
# =========================
# Step 1: Defined a function called favorite_book(title) that takes one argument 'title'.
# Step 2: Inside the function, used f-string to include the book title in a message.
# Step 3: Called favorite_book("Alice in Wonderland") which passed the string as the parameter.
# Outcome: The message includes the book title because the function uses the argument.

# =========================
# Exercise 3: Some Geography
# =========================
# Step 1: Defined describe_city(city, country="Unknown") with a default value for 'country'.
# Step 2: Used f-string to print "<city> is in <country>" using the parameter values.
# Step 3: Called describe_city("Reykjavik", "Iceland") and describe_city("Paris").
# Outcome: For Reykjavik, country is provided so it prints Iceland; for Paris, country is not provided, so the default "Unknown" is used.

# =========================
# Exercise 4: Random Number Comparison
# =========================
# Step 1: Imported random module to generate random numbers.
# Step 2: Defined compare_random(user_number) function to accept a number.
# Step 3: Generated a random integer between 1 and 100 using random.randint().
# Step 4: Compared user_number and random_number. Printed "Success!" if they match, else printed both numbers.
# Step 5: Called compare_random(50) to test the function.
# Outcome: The function shows success only if the numbers match; otherwise it shows fail with both numbers.

# =========================
# Exercise 5: Personalized Shirts
# =========================
# Step 1 & 4: Defined make_shirt(size="large", text="I love Python") with default values.
# Step 2: Printed a summary message describing the shirt size and text.
# Step 5: Called make_shirt() with defaults, size="medium", and size="small" with custom text.
# Outcome: Default values are used when no arguments are provided; custom values replace defaults when specified.

# =========================
# Exercise 6: Magicians
# =========================
# Step 1: Created a list of magician names.
# Step 2: Defined show_magicians(names) to print each name in the list.
# Step 3: Defined make_great(names) to add " the Great" to each magician’s name using a for loop.
# Step 4: Called make_great() to modify the list and show_magicians() to display it.
# Outcome: The list is modified in place, so when printed, each magician’s name includes "the Great".

# =========================
# Exercise 7: Temperature Advice
# =========================
# Step 1: Defined get_random_temp() to generate a random float between -10 and 40 using random.uniform().
# Step 2: Defined main() function to call get_random_temp() and store the temperature.
# Step 3: Printed the current temperature.
# Step 4: Used if/elif/else to give advice based on the temperature range.
# Step 5: Called main() to execute the code.
# Outcome: Each time you run the code, it shows a different temperature and corresponding advice. Random numbers and conditional statements control the result.