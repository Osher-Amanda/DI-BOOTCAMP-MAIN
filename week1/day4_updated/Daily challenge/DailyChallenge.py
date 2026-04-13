# Coffee Shop Menu Manager

# 1. Initial data structure
# We use a dictionary where the key is the name (string) and value is the price (float)
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

# 2. Required functions

def show_menu(menu_dict):
    """Print all drinks and prices."""
    if not menu_dict:
        print("\nThe menu is empty.")
    else:
        print("\nCurrent menu:")
        for drink, price in menu_dict.items():
            # The :.1f ensures the price shows one decimal point
            print(f"{drink} - {price:.1f}₪")

def add_item(menu_dict):
    """Add a new drink to the menu."""
    name = input("Enter new drink name: ").lower()
    if name in menu_dict:
        print("Item already exists!")
    else:
        try:
            price = float(input("Enter price: "))
            menu_dict[name] = price
            print(f'"{name}" added!')
        except ValueError:
            print("Invalid price. Please enter a number.")

def update_price(menu_dict):
    """Change the price of an existing drink."""
    name = input("Which drink do you want to update? ").lower()
    if name in menu_dict:
        try:
            new_price = float(input("Enter the new price: "))
            menu_dict[name] = new_price
            print("Price updated!")
        except ValueError:
            print("Invalid price. Please enter a number.")
    else:
        print("Item not found.")

def delete_item(menu_dict):
    """Remove a drink from the menu."""
    name = input("Which drink do you want to delete? ").lower()
    if name in menu_dict:
        del menu_dict[name] # Use 'del' to remove a key from a dictionary
        print("Item deleted!")
    else:
        print("Item not found.")

def show_options():
    """Print the available actions."""
    print("\nWhat would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")

def run_coffee_shop():
    """Main controller loop of the program."""
    while True:
        show_options()
        choice = input("> ")

        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break # This exits the while loop
        else:
            print("Invalid choice, try again.")

# 3. Start the program
# This line calls the controller function to begin the loop
if __name__ == "__main__":
    run_coffee_shop()