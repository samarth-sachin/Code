import numpy as np

contacts = np.array([], dtype=[('Name', 'U50'), ('Phone', 'U15'), ('Email', 'U50')])

def is_valid_phone(phone):
    return phone.isdigit() and (len(phone) == 10 or len(phone) == 13)

def is_valid_email(email):
    return "@" in email and "." in email.split('@')[-1] and len(email.split('@')[0]) > 0

def contact_exists(name):
    return name in contacts['Name']

def add_contact(name, phone, email):
    global contacts
    if not name or len(name.strip()) == 0:
        print("Error: Name cannot be empty.")
        return
    if not is_valid_phone(phone):
        print("Error: Invalid phone number. It must be 10 or 13 digits.")
        return
    if not is_valid_email(email):
        print("Error: Invalid email format.")
        return
    if contact_exists(name):
        print(f"Error: A contact with the name '{name}' already exists.")
        return
    new_contact = np.array([(name.strip(), phone.strip(), email.strip())], dtype=contacts.dtype)
    contacts = np.append(contacts, new_contact)
    print(f"Contact '{name}' added successfully!")

def view_contacts():
    if len(contacts) == 0:
        print("No contacts found.")
    else:
        print("\nAll Contacts:")
        print("{:<5} {:<20} {:<15} {:<30}".format("No.", "Name", "Phone", "Email"))
        print("-" * 70)
        for i, contact in enumerate(contacts):
            print(f"{i + 1:<5} {contact['Name']:<20} {contact['Phone']:<15} {contact['Email']:<30}")
        print()

def search_contact(keyword):
    if not keyword or len(keyword.strip()) == 0:
        print("Error: Search keyword cannot be empty.")
        return
    keyword = keyword.strip().lower()
    found = [contact for contact in contacts if keyword in contact['Name'].lower()]
    if len(found) == 0:
        print("No contacts found with the given keyword.")
    else:
        print("\nSearch Results:")
        print("{:<5} {:<20} {:<15} {:<30}".format("No.", "Name", "Phone", "Email"))
        print("-" * 70)
        for i, contact in enumerate(found):
            print(f"{i + 1:<5} {contact['Name']:<20} {contact['Phone']:<15} {contact['Email']:<30}")
        print()

def delete_contact(name):
    global contacts
    if not name or len(name.strip()) == 0:
        print("Error: Name cannot be empty.")
        return
    name = name.strip()
    indices = np.where(contacts['Name'] == name)[0]
    if len(indices) == 0:
        print(f"No contact found with the name '{name}'.")
    else:
        contacts = np.delete(contacts, indices[0])
        print(f"Contact '{name}' deleted successfully!")

def display_menu():
    print("\nContact Management System")
    print("1. Add Contact")
    print("2. View Contacts")
    print("3. Search Contact")
    print("4. Delete Contact")
    print("5. Exit")

def main():
    while True:
        display_menu()
        choice = input("Enter your choice (1-5): ").strip()
        if choice == '1':
            name = input("Enter Name: ").strip()
            phone = input("Enter Phone: ").strip()
            email = input("Enter Email: ").strip()
            add_contact(name, phone, email)
        elif choice == '2':
            view_contacts()
        elif choice == '3':
            keyword = input("Enter keyword to search: ").strip()
            search_contact(keyword)
        elif choice == '4':
            name = input("Enter the name of the contact to delete: ").strip()
            delete_contact(name)
        elif choice == '5':
            print("Exiting the Contact Management System. Goodbye!")
            break
        else:
            print("Invalid choice! Please enter a number between 1 and 5.")

if _name_ == "_main_":
    main()