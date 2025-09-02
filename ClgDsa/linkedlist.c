#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *head = NULL;

void insert() {
    
    Node *ptr = (Node *)malloc(sizeof(Node));
    scanf("%d", &ptr->data);
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
        printf("%d", temp->data);
        printf("%d",temp);
        printf("%d\n",temp->next);
        temp = temp->next;
    }
}

int main() {
    create();
    display();
    return 0;
}