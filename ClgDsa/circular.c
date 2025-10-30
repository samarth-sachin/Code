#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *last = NULL;

void insert() {
    
    Node *ptr = (Node *)malloc(sizeof(Node));
    scanf("%d", &ptr->data);
    ptr->next = NULL;

    if (last == NULL) {
        last = ptr;
        last->next=last;
    } else {
        ptr->next=last->next;
        last->next=ptr;
        last=ptr;
    }
}

void create() {
    printf("Enter value of Nodes\n");      
    int n = 4;
    for (int i = 0; i < n; i++) {
        insert();
    }
}
void insertat() {
    int pos;
    printf("Enter position: ");
    scanf("%d", &pos);

    Node *ptr = (Node *)malloc(sizeof(Node));
    printf("Enter data: ");
    scanf("%d", &ptr->data);
    ptr->next = NULL;

    if (pos == 1) {
        ptr->next = head;
        head = ptr;
        if (rear == NULL) rear = ptr; 
    } else {
        Node *temp = head;
        int i = 1;

        while (i < pos - 1 && temp != NULL) {
            temp = temp->next;
            i++;
        }

        if (temp == NULL) {
            printf("Position out of bounds.\n");
            free(ptr);
            return;
        }

        if (temp->next == NULL) {
            temp->next = ptr;
            rear = ptr;
        } else {
            ptr->next = temp->next;
            temp->next = ptr;
        }
    }
}
void display() {
    Node *temp = last->next;
    while (temp != last){
        printf("%d", temp->data);
        temp = temp->next;
    }
    printf("%d",last->data);
}

int main() {
    create();
    display();
    insertat();
    return 0;
}