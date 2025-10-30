#include <stdio.h>
#include <stdlib.h>
typedef struct Node
{ int data;
   struct Node *next;
}Node;
Node *head=NULL;
Node *rear=NULL;
void insert()
{Node *ptr = (Node *)malloc(sizeof(Node));
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
        rear=ptr;
    }
}
void create()
{ printf("\nenter list");
    for(int i=0;i<4;i++)
    {
        insert();
    }
}
void display()
{
    Node * temp=head;
    while(temp!=NULL)
    {
        printf("%d->",temp->data);
        temp=temp->next;
    }
}
void peek()
{ printf("\npeak element");
    printf("%d",head->data);
}
void deque()
{
    printf("\nremoved element");
    head=head->next;
    Node *temp=head;
    while(temp!=NULL)
    {
        printf("%d->",temp->data);
        temp=temp->next;
    }
}
int main()
{ create();
    display();
    peek();
    deque();
    return 0;

}