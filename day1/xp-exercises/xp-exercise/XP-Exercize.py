# --- Exercise 1: Hello World ---
# We use \n to create a "new line" so it prints 4 times on one line of code
print("Hello world\n" * 4)


# --- Exercise 2: Some Math ---
# In Python, ** means "to the power of" and * means "multiplied by"
result = (99**3) * 8
print(result)


# --- Exercise 3: What is the output? ---
# Guess: False (5 is not less than 3)
print(5 < 3) 

# Guess: True (3 is exactly equal to 3)
print(3 == 3) 

# Guess: False (A number 3 is not the same as a text "3")
print(3 == "3") 

# Guess: Error (Python can't compare text and numbers with >)
# print("3" > 3) 

# Guess: False (Python is case-sensitive; capital H is different from lowercase h)
print("Hello" == "hello")


# --- Exercise 4: Your computer brand ---
computer_brand = "Apple"
# We use an 'f' before the quotes to "format" the variable into the string
print(f"I have a {computer_brand} computer.")


# --- Exercise 5: Your information ---
name = "Alex"
age = 25
shoe_size = 42
# Combining everything into one long sentence
info = f"My name is {name}, I am {age} years old, I wear size {shoe_size} shoes, and I love coding!"
print(info)


# --- Exercise 6: A & B ---
a = 10
b = 5
# An 'if' statement checks a condition before running the code inside it
if a > b:
    print("Hello World")


# --- Exercise 7: Odd or Even ---
# input() always gets text, so we wrap it in int() to turn it into a number
user_num = int(input("Enter a number to check if it's odd or even: "))

# % 2 finds the remainder. If you divide by 2 and the remainder is 0, it's even.
if user_num % 2 == 0:
    print("That's an even number!")
else:
    print("That's an odd number!")


# --- Exercise 8: What’s your name? ---
my_name = "Alex"
user_name = input("What is your name? ")

if user_name.lower() == my_name.lower():
    print("No way! We have the same name. Are we long-lost twins?")
else:
    print(f"Nice to meet you, {user_name}, but my name is way cooler.")


# --- Exercise 9: Tall enough to ride ---
# We convert the input to an integer so we can compare it to 145
height = int(input("How tall are you in cm? "))

if height > 145:
    print("Congrats! You are tall enough to ride the roller coaster.")
else:
    print("Sorry, you need to grow a bit more before you can ride!")