from menu_manager import MenuManager
from menu_item import MenuItem  

def show_user_menu():
    while True:
        print("\nMenu Editor")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("Q - Quit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == "V":
            item_name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(item_name)
            print(item if item else "Item not found.")
        
        elif choice == "A":
            add_item_to_menu()
        
        elif choice == "D":
            remove_item_from_menu()
        
        elif choice == "U":
            update_item_from_menu()
        
        elif choice == "S":
            show_restaurant_menu()
        
        elif choice == "Q":
            show_restaurant_menu()
            print("Exiting menu editor...")
            break
        
        else:
            print("Invalid choice! Please select a valid option.")

def add_item_to_menu():
    name = input("Enter item name: ").strip()
    try:
        price = int(input("Enter item price: ").strip())
        item = MenuItem(name, price)
        item.save()
        print(f"{name} was added successfully.")
    except ValueError:
        print("Invalid price! Please enter a valid number.")

def remove_item_from_menu():
    name = input("Enter item name to delete: ").strip()
    item = MenuItem(name, 0)
    success = item.delete()
    if success:
        print(f"{name} was deleted successfully.")
    else:
        print("Error: Item could not be deleted.")

def update_item_from_menu():
    old_name = input("Enter item name to update: ").strip()
    new_name = input("Enter new name: ").strip()
    try:
        new_price = int(input("Enter new price: ").strip())
        item = MenuItem(old_name, 0)
        success = item.update(new_name, new_price)
        if success:
            print(f"{old_name} updated to {new_name} with price {new_price}.")
        else:
            print("Error: Item could not be updated.")
    except ValueError:
        print("Invalid price! Please enter a valid number.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\nRestaurant Menu:")
    for item in items:
        print(item)
