import numpy as np
import csv

# File to store contact data
FILE_NAME = "contacts.csv"

# Initialize the contact list as an empty NumPy structured array
contacts = np.array([], dtype=[('Name', 'U50'), ('Phone', 'U15'), ('Email', 'U50')])

# Load contacts from file
def load_contacts():
    global contacts
    try:
        with open(FILE_NAME, newline='', encoding='utf-8') as file:
            reader = csv.reader(file)
            next(reader)  # Skip header
            contacts = np.array([tuple(row) for row in reader], dtype=contacts.dtype)
    except FileNotFoundError:
        contacts = np.array([], dtype=contacts.dtype)
    except Exception as e:
        print(f"Error loading contacts: {e}")

# Save contacts to file
def save_contacts():
    try:
        with open(FILE_NAME, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(["Name", "Phone", "Email"])
            writer.writerows(contacts)
    except Exception as e:
        print(f"Error saving contacts: {e}")

# Helper function to validate phone number
def is_valid_phone(phone):
    return phone.isdigit() and (len(phone) == 10 or len(phone) == 13)

# Helper function to validate email
def is_valid_email(email):
    return "@" in email and "." in email.split('@')[-1] and len(email.split('@')[0]) > 0

# Helper function to check if a contact exists by name
def contact_exists(name):
    return name in contacts['Name']

# Function to add a new contact
def add_contact(name, phone, email):
    global contacts
    if not name.strip():
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

    # Add new contact
    new_contact = np.array([(name.strip(), phone.strip(), email.strip())], dtype=contacts.dtype)
    contacts = np.append(contacts, new_contact)
    save_contacts()
    print(f"Contact '{name}' added successfully!")

# Function to view all contacts
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

# Function to search for a contact by keyword (case-insensitive)
def search_contact(keyword):
    keyword = keyword.strip().lower()
    found = [contact for contact in contacts if keyword in contact['Name'].lower()]
    
    if not found:
        print("No contacts found with the given keyword.")
    else:
        print("\nSearch Results:")
        print("{:<5} {:<20} {:<15} {:<30}".format("No.", "Name", "Phone", "Email"))
        print("-" * 70)
        for i, contact in enumerate(found):
            print(f"{i + 1:<5} {contact['Name']:<20} {contact['Phone']:<15} {contact['Email']:<30}")
        print()

# Function to delete a contact by name
def delete_contact(name):
    global contacts
    name = name.strip()
    indices = np.where(contacts['Name'] == name)[0]
    
    if len(indices) == 0:
        print(f"No contact found with the name '{name}'.")
    else:
        contacts = np.delete(contacts, indices[0])
        save_contacts()
        print(f"Contact '{name}' deleted successfully!")

# Display the main menu
def display_menu():
    print("\nContact Management System")
    print("1. Add Contact")
    print("2. View Contacts")
    print("3. Search Contact")
    print("4. Delete Contact")
    print("5. Exit")

# Main function
def main():
    load_contacts()
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

# Run the program
if __name__ == "__main__":
    main()
