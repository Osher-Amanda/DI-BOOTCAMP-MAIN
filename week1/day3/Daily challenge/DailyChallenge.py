#Python Exercises Letter Indices And Affordable Items
· python
"""
    """
    wallet_amount = _parse_price_to_int(wallet)
    affordable = []


    for item, price_str in items_purchase.items():
        price = _parse_price_to_int(price_str)
        # <= means "can pay if price is equal to wallet amount"
        if price <= wallet_amount:
            affordable.append(item)


    if not affordable:
        return "Nothing"


    return sorted(affordable)




if __name__ == "__main__":
    print("Choose what you want to run:")
    print("1 - Letter indices (interactive: enter a word)")
    print("2 - Affordable items (interactive: paste items and a wallet)")
    print("3 - Run the three examples from the exercise and show outputs")


    choice = input("Enter 1, 2 or 3: ").strip()


    if choice == "1":
        word = input("Enter a word: ")
        print("Result:", indices_of_letters(word))


    elif choice == "2":
        print("Enter items in the format: Name:$Price,Name2:$Price2 (no spaces required)")
        items_input = input("Items: ").strip()
        wallet = input("Wallet (e.g. $300): ").strip()


        items_purchase: Dict[str, str] = {}
        for pair in items_input.split(","):
            pair = pair.strip()
            if not pair:
                continue
            if ":" not in pair:
                print(f"Skipping invalid entry: {pair!r} (expected Name:$Price)")
                continue
            name, price = pair.split(":", 1)
            items_purchase[name.strip()] = price.strip()


        print("Affordable items:", affordable_items(items_purchase, wallet))


    elif choice == "3":
        # Letter indices examples
        examples = ["dodo", "froggy", "grapes"]
        print("\nLetter indices examples:")
        for ex in examples:
            print(f"{ex!r} -> {indices_of_letters(ex)}")


        # Affordable items examples from the exercise
        print("\nAffordable items examples:")


        items1 = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
        wallet1 = "$300"
        print("Example 1 ->", affordable_items(items1, wallet1))


        items2 = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
        wallet2 = "$100"
        print("Example 2 ->", affordable_items(items2, wallet2))


        items3 = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
        wallet3 = "$1"
        print("Example 3 ->", affordable_items(items3, wallet3))


    else:
        print("Invalid choice. Rerun the script and enter 1, 2 or 3.")