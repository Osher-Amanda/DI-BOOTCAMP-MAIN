# Exercise 1: Currency Class with Dunder Methods

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # String representation
    def __str__(self):
        return f"{self.amount} {self.currency}{'s' if self.amount != 1 else ''}"

    # Official representation
    def __repr__(self):
        return f"{self.amount} {self.currency}{'s' if self.amount != 1 else ''}"

    # Integer conversion
    def __int__(self):
        return self.amount

    # Addition
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        elif isinstance(other, (int, float)):
            return self.amount + other
        else:
            raise TypeError("Can only add Currency or number types")

    # In-place addition
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, (int, float)):
            self.amount += other
        else:
            raise TypeError("Can only add Currency or number types")
        return self

# Testing Exercise 1
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)          # '5 dollars'
print(int(c1))     # 5
print(repr(c1))    # '5 dollars'
print(c1 + 5)      # 10
print(c1 + c2)     # 15
print(c1)          # still 5 dollars
c1 += 5
print(c1)          # 10 dollars
c1 += c2
print(c1)          # 20 dollars

# Uncomment to see TypeError
# print(c1 + c3)   # TypeError


# Exercise 2: Module Import

# Step 1: Create func.py with this content:
# def add_numbers(a, b):
#     print(a + b)

# Step 2: In exercise_one.py
# from func import add_numbers
# add_numbers(5, 10)   # Output: 15


# Exercise 3: Random String Using string Module

import string
import random

letters = string.ascii_letters  # combines uppercase and lowercase
random_string = ''.join(random.choice(letters) for _ in range(5))
print(f"Random string: {random_string}")


# Exercise 4: Current Date

from datetime import datetime

def current_date():
    today = datetime.today()
    print("Today's date:", today.strftime("%Y-%m-%d"))

current_date()


# Exercise 5: Time until January 1st

def time_until_jan1():
    now = datetime.now()
    next_year = datetime(year=now.year + 1, month=1, day=1)
    time_left = next_year - now
    print(f"Time left until Jan 1st: {time_left}")

time_until_jan1()


# Exercise 6: Minutes lived since birthday

def minutes_lived(birthdate_str):
    """
    birthdate_str format: 'YYYY-MM-DD'
    """
    birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.now()
    delta = now - birthdate
    minutes = delta.total_seconds() / 60
    print(f"You have lived {int(minutes)} minutes.")

minutes_lived("2000-01-01")  # Example


# Exercise 7: Faker Module

# pip install faker
from faker import Faker

fake = Faker()
users = []

def generate_users(n):
    for _ in range(n):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

generate_users(5)
print("Fake users:")
for u in users:
    print(u)


# Explanations:

# Exercise 1: Currency
# - __str__ and __repr__ print human-readable and official string representation.
# - __int__ allows converting currency object to integer.
# - __add__ supports addition with numbers or another Currency of same type; raises error if type differs.
# - __iadd__ modifies the object in-place.

# Exercise 2: Module
# - Create func.py with a function, then import and call it in another file.

# Exercise 3: Random string
# - string.ascii_letters gives all letters.
# - random.choice selects random character.
# - ''.join(...) concatenates them into string.

# Exercise 4: Current date
# - datetime.today() returns current date.

# Exercise 5: Time until Jan 1
# - datetime.now() gives current date and time.
# - Subtract to find timedelta until next Jan 1.

# Exercise 6: Minutes lived
# - datetime.strptime parses birthdate.
# - timedelta.total_seconds() / 60 gives minutes.

# Exercise 7: Faker
# - Faker generates realistic fake data.
# - Store each fake user as dictionary in list.