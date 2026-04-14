# --- Exercise: Old MacDonald’s Farm ---

class Farm:
    def __init__(self, farm_name):
        # We store the name and start with an empty dictionary for animals
        self.name = farm_name
        self.animals = {}

    # Step 3 & 8: Adding animals (using **kwargs for the bonus)
    def add_animal(self, animal_type=None, count=1, **kwargs):
        # This part handles the standard way: add_animal('cow', 5)
        if animal_type:
            if animal_type in self.animals:
                self.animals[animal_type] += count
            else:
                self.animals[animal_type] = count
        
        # This part handles the Bonus (Step 8): add_animal(cow=5, sheep=2)
        for name, qty in kwargs.items():
            if name in self.animals:
                self.animals[name] += qty
            else:
                self.animals[name] = qty

    # Step 4: Printing the full info
    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        
        # We loop through the dictionary to get the animal name and its count
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
            
        info += "\n    E-I-E-I-O!"
        return info

    # Step 6: Bonus - Get sorted list of animal keys
    def get_animal_types(self):
        # sorted() returns the keys in alphabetical order
        return sorted(self.animals.keys())

    # Step 7: Bonus - Get the short summary sentence
    def get_short_info(self):
        animal_list = self.get_animal_types()
        formatted_animals = []

        for animal in animal_list:
            # If there is more than 1, we add an 's' (very basic plural)
            if self.animals[animal] > 1:
                formatted_animals.append(animal + "s")
            else:
                formatted_animals.append(animal)

        # Joining the words with commas and 'and' for the last one
        # This turns ['cows', 'goats', 'sheeps'] into "cows, goats and sheeps"
        animal_string = ", ".join(formatted_animals[:-1]) + " and " + formatted_animals[-1]
        
        return f"{self.name}'s farm has {animal_string}."

# --- Step 5: Test Your Code ---

macdonald = Farm("McDonald")

# Testing standard add
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')

# Testing the bonus add (Step 8)
macdonald.add_animal(goat=12)

# Print the full info
print(macdonald.get_info())

# Print the short info (Bonus)
print("\n" + macdonald.get_short_info())