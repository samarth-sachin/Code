#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
    struct Node *previous;
} Node;

Node *head = NULL;

void insert() {
    
    Node *ptr = (Node *)malloc(sizeof(Node));
    scanf("%d", &ptr->data);
    ptr->next = NULL;
    ptr->previous=NULL;

    if (head == NULL) {
        head = ptr;
    } else {
        Node *temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        ptr->previous=temp;
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
        printf("%d<->", temp->data);
        temp = temp->next;
    }
}

int main() {
    create();
    display();
    return 0;
}