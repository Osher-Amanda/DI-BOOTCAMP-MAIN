# Exercise 1: Pets

class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"

class Bengal(Cat):
    def sing(self, sounds):
        return f"{sounds}"

class Chartreux(Cat):
    def sing(self, sounds):
        return f"{sounds}"

class Siamese(Cat):
    pass 

bengal_obj = Bengal("Leo", 3)
chartreux_obj = Chartreux("Milo", 5)
siamese_obj = Siamese("Luna", 2)
all_cats = [bengal_obj, chartreux_obj, siamese_obj]

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

sara_pets = Pets(all_cats)
sara_pets.walk()

# Explanation:
# 1. We use 'Inheritance' so the three cat breeds automatically get the name and age setup from the Cat class.
# 2. 'Siamese' uses 'pass' because it doesn't need any special new code; it just acts exactly like a Cat.
# 3. 'all_cats' is a list that stores our actual cat objects.
# 4. The Pets class is a manager that lets us perform one action (walking) on the whole group at once.


# Exercise 2: Dogs

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 4, 15)
dog3 = Dog("Max", 3, 25)

print(dog1.bark())
print(f"Dog Speed: {dog2.run_speed()}")
print(dog1.fight(dog2))

# Explanation:
# 1. The __init__ method stores the dog's details so we can use them later in math.
# 2. run_speed() is a dynamic calculation; if the weight or age changes, the speed changes too.
# 3. In the fight() method, we compare 'self' (the dog calling the function) against 'other_dog' (the dog passed in).


# Exercise 3: PetDog

import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self.name] + list(args)
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet!")

my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Max", "Buddy")
my_dog.do_a_trick()

# Explanation:
# 1. super().__init__ is a shortcut that tells Python to use the setup logic from the parent Dog class.
# 2. 'self.trained' starts as False because every dog starts as a beginner before their first lesson.
# 3. *args is a flexible tool that lets you pass in as many dog names as you want without crashing.
# 4. do_a_trick uses the 'random' module to pick a different trick every time the code runs.


# Exercise 4: Family and Person Classes

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = "" 

    def is_18(self):
        return self.age >= 18

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"You are over 18, your parents accept that you will go out with your friends.")
                else:
                    print(f"Sorry, you are not allowed to go out with your friends.")
                return
        print(f"Member {first_name} not found.")

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")

smith_family = Family("Smith")
smith_family.born("Alice", 20)
smith_family.born("Bob", 15)
smith_family.family_presentation()
smith_family.check_majority("Alice")
smith_family.check_majority("Bob")

# Explanation:
# 1. The Person class handles individual data like age, while Family handles the group list.
# 2. In born(), we "connect" the two classes by building a Person object and putting it in the Family list.
# 3. check_majority() shows how to "loop" through a list of objects and find one specific name.