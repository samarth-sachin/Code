public class BankApp {
    public static void main(String[] args) {
        Balance newAccount = new Balance("Sam", "Kowad", "9876543210", "Saving", 1001, 5000);

        newAccount.showAccountDetails();
        newAccount.deposit(2000);
        newAccount.withdraw(1000);
        newAccount.showBalance();
    }
}

class Customer {
    String name;
    String phone;
    String address;

    public Customer(String name, String phone, String address) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}

class Account extends Customer {
    String accountType;
    int accountNumber;

    public Account(String name, String phone, String address, String accountType, int accountNumber) {
        super(name, phone, address);
        this.accountType = accountType;
        this.accountNumber = accountNumber;
    }

    public void showAccountDetails() {
        System.out.println("Account Holder: " + name);
        System.out.println("Phone: " + phone);
        System.out.println("Address: " + address);
        System.out.println("Account Type: " + accountType);
        System.out.println("Account Number: " + accountNumber);
    }
}

class Balance extends Account {
    int balance;

    public Balance(String name, String address, String phone, String accountType, int accountNumber, int balance) {
        super(name, phone, address, accountType, accountNumber);
        this.balance = balance;
    }

    public void deposit(int amount) {
        balance += amount;
        System.out.println("deopsited " + amount);
    }

    public void withdraw(int amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("withdraw " + amount);
        } else {
            System.out.println("insuffeicient balance");
        }
    }

    public void showBalance() {
        System.out.println("Current Balance: " + balance);
    }
}