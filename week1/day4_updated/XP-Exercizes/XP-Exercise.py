import random  # We import this once at the top to use in Exercises 4 and 7

# ==========================================
# 🌟 Exercise 1: What Are You Learning?
# ==========================================
# EXPLANATION: A function is like a "recipe." 
# Defining it (def) is writing the recipe. 
# Calling it (display_message()) is actually cooking it!

def display_message():
    """This function prints a simple sentence."""
    print("I am learning about functions in Python.")

# Call the function to make it run
display_message()


# ==========================================
# 🌟 Exercise 2: What’s Your Favorite Book?
# ==========================================
# EXPLANATION: Parameters (like 'title') are placeholders. 
# When we call the function, we pass an "argument" (the actual book name) 
# into that placeholder.

def favorite_book(title):
    """This function takes a book title and prints a message."""
    print(f"One of my favorite books is {title}.")

# Call the function and provide the 'argument' inside the parentheses
favorite_book("Alice in Wonderland")


# ==========================================
# 🌟 Exercise 3: Some Geography
# ==========================================
# EXPLANATION: Default values (country="Unknown") are back-up plans.
# If you don't provide a country when calling the function, Python uses the default.

def describe_city(city, country="Unknown"):
    """Prints a sentence describing a city and its country."""
    print(f"{city} is in {country}.")

# 1. Calling with both arguments
describe_city("Reykjavik", "Iceland")

# 2. Calling with only the city (it will use the default "Unknown")
describe_city("Paris")


# ==========================================
# 🌟 Exercise 4: Random
# ==========================================
# EXPLANATION: random.randint(1, 100) picks a whole number for us.
# We then use 'if/else' to compare your guess to the computer's choice.

def compare_numbers(user_number):
    """Generates a random number and compares it to the user's input."""
    random_num = random.randint(1, 100)
    
    if user_number == random_num:
        print("Success! The numbers match.")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_num}")

# Call the function with any number between 1 and 100
compare_numbers(50)


# ==========================================
# 🌟 Exercise 5: Let’s Create Some Personalized Shirts!
# ==========================================
# EXPLANATION: You can change the order of arguments if you use 
# "Keyword Arguments" (naming the parameter specifically).

def make_shirt(size="large", text="I love Python"):
    """Summarizes the shirt size and the printed message."""
    print(f"The size of the shirt is {size} and the text is {text}.")

# 1. Large shirt with default message
make_shirt()

# 2. Medium shirt with default message
make_shirt(size="medium")

# 3. Any size with a custom message
make_shirt("small", "Python is Life")

# 4. Using Keyword Arguments (order doesn't matter here)
make_shirt(text="Hello!", size="extra-small")


# ==========================================
# 🌟 Exercise 6: Magicians...
# ==========================================
# EXPLANATION: Functions can modify lists. When we loop through 
# 'range(len(list))', we can reach inside the list and change the value at each index.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    """Prints each name in the list."""
    for name in magicians:
        print(name)

def make_great(magicians):
    """Adds 'the Great' to each magician's name in the list."""
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"

# First, modify the list
make_great(magician_names)
# Then, show the results
show_magicians(magician_names)


# ==========================================
# 🌟 Exercise 7: Temperature Advice
# ==========================================
# EXPLANATION: We use 'return' to send a value back from a function 
# so we can save it into a variable inside another function (main).

def get_random_temp():
    """Returns a random floating-point temperature."""
    # Using uniform() gives us decimals for better accuracy
    return round(random.uniform(-10, 40), 1)

def main():
    """The main logic for the temperature program."""
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    # Conditional logic for advice
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather.")
    elif 23 < temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

# Run the program
main()