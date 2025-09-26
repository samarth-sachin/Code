#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int roll;
    char name[10];
    int age;
    struct Node *next;
} Node;

Node *head = NULL;

void insert() {
    Node *ptr = (Node *)malloc(sizeof(Node));
    printf("Enter roll, name, and age: ");
    scanf("%d", &ptr->roll);
    scanf("%s", ptr->name);
    scanf("%d", &ptr->age);
    ptr->next = NULL;

    if (head == NULL) {
        head = ptr;
    } else {
        Node *temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = ptr;
    }
}

void create() {
    printf("Enter value of Nodes\n");
    int n = 4;
    for (int i = 0; i < n; i++) {
        insert();
    }
}

void display() {
    Node *temp = head;
    while (temp != NULL) {
        printf("Roll: %d, Name: %s, Age: %d\n", temp->roll, temp->name, temp->age);
        temp = temp->next;
    }
}

void search() {
    int key;
    printf("Enter roll to search: ");
    scanf("%d", &key);

    Node *temp = head;
    while (temp != NULL) {
        if (temp->roll == key) {
            printf("Found: Roll = %d, Name = %s, Age = %d\n", temp->roll, temp->name, temp->age);
            return;
        }
        temp = temp->next;
    }
    printf("Not found.\n");
}

void reverse() {
    Node *prev = NULL, *current = head, *next = NULL;

    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    printf("List reversed.\n");
    display();
}

void Modify() {
    int key;
    printf("Enter roll of node to modify: ");
    scanf("%d", &key);

    Node *temp = head;
    while (temp != NULL) {
        if (temp->roll == key) {
            printf("Enter new roll: ");
            scanf("%d", &temp->roll);
            printf("Enter new name: ");
            scanf("%s", temp->name);
            printf("Enter new age: ");
            scanf("%d", &temp->age);
            printf("Node modified.\n");
            return;
        }
        temp = temp->next;
    }
    printf("Node not found.\n");
}

void delete() {
    int key;
    printf("Enter roll which you want to delete: ");
    scanf("%d", &key);

    Node *temp = head, *prev = NULL;

    while (temp != NULL) {
        if (temp->roll == key) {
            if (prev == NULL) {
                head = temp->next;
            } else {
                prev->next = temp->next;
            }
            free(temp);
            printf("Node deleted.\n");
            return;
        }
        prev = temp;
        temp = temp->next;
    }
    printf("Node not found.\n");
}

int main() {
    create();
    display();
    search();
    reverse();
    Modify();
    delete();
    display();
    return 0;
}