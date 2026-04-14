# --- Exercise 1: Cats ---
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create three cat objects
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Luna", 7)
cat3 = Cat("Oliver", 5)

# Step 2: Function to find the oldest
def find_oldest_cat(cat_list):
    # We start by assuming the first one is the oldest
    oldest = cat_list[0]
    for cat in cat_list:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

# Step 3: Print details
cats = [cat1, cat2, cat3]
winner = find_oldest_cat(cats)
print(f"The oldest cat is {winner.name}, and is {winner.age} years old.")


# --- Exercise 2: Dogs ---
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        # x is height * 2
        print(f"{self.name} jumps {self.height * 2} cm high!")

# Instantiate dog objects
davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

# Call methods
davids_dog.bark()
davids_dog.jump()

# Compare sizes
if davids_dog.height > sarahs_dog.height:
    print(f"The winner is {davids_dog.name}!")
else:
    print(f"The winner is {sarahs_dog.name}!")


# --- Exercise 3: Who’s the song producer? ---
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        # We loop through the list and print each line
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


# --- Exercise 4: Afternoon at the Zoo ---
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.grouped_animals = {}

    # Bonus: Using *args to add multiple animals at once
    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print(f"Animals in {self.name}: {', '.join(self.animals)}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        # First, sort the list alphabetically
        self.animals.sort()
        
        # We use a dictionary to group them by the first letter
        self.grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = [animal]
            else:
                self.grouped_animals[first_letter].append(animal)

    def get_groups(self):
        print("Animal Groups:")
        for letter, names in self.grouped_animals.items():
            print(f"{letter}: {names}")

# Test the Zoo
ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe", "Bear", "Baboon", "Cat", "Cougar", "Zebra")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()