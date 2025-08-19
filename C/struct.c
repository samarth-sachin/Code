#include <stdio.h>

struct employee {
    char name[10];
    int age;
    long salary;
    char department[8];
};

int main() {
    int n;

    printf("How many employees do you want to enter? ");
    scanf("%d", &n);

    struct employee e[n];

    for (int i = 0; i < n; i++) {
        printf("\nEnter details for employee %d:\n", i + 1);

        printf("Enter name: ");
        scanf("%s", e[i].name);

        printf("Enter age: ");
        scanf("%d", &e[i].age);

        printf("Enter salary: ");
        scanf("%ld", &e[i].salary);

        printf("Enter department: ");
        scanf("%s", e[i].department);
    }

    printf("\nEntered Employee Details:\n");
    for (int i = 0; i < n; i++) {
        printf("\nEmployee %d:\n", i + 1);
        printf("Name: %s\n", e[i].name);
        printf("Age: %d\n", e[i].age);
        printf("Salary: %ld\n", e[i].salary);
        printf("Department: %s\n", e[i].department);
    }

    return 0;
}

// union inventory {
//     float price;
//     int id;
    
// };

// int main() {
//     int n;

//     printf("How many invetory do you want to enter? ");
//     scanf("%d", &n);

//     union inventory e[n];

//     for (int i = 0; i < n; i++) {
//         printf("\nEnter details for inventory %d:\n", i + 1);

//         printf("Enter id: ");
//         scanf("%s", e[i].id);

//         printf("Enter price: ");
//         scanf("%d", &e[i].price);

//     }

//     printf("\nEntered Employee Details:\n");
//     for (int i = 0; i < n; i++) {
//         printf("\nInventory %d:\n", i + 1);
//         printf("Price: %s\n", e[i].price);
//         printf("ID: %d\n", e[i].id);
       
//     }
