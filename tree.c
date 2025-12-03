#include <stdio.h>
typedef struct Node
{
    int val;
    Node *left;
    Node *right;
}Node;
Node *create(int data)
{
    Node *ptr=Node *malloc(sizeof(Node));
    ptr->val=data;
    ptr->left=null;
    ptr->right=null;
}
Node *insert(Node *root,int data)
{
    if(root==NULL)
    {
       return create(data);
    }
    else if(root->val>data)
    {
        root->left=insert(root->left,data);
    }
    else root->right=insert(root->right,data);
    return root;
}
#include <stdio.h>
#include <stdlib.h>

#define MAX 10   // maximum number of vertices

int visited[MAX];   // visited array

// DFS function
void DFS(int adj[MAX][MAX], int n, int start) {
    visited[start] = 1;
    printf("%d ", start);   // print the current node

    for (int i = 0; i < n; i++) {
        if (adj[start][i] == 1 && !visited[i]) {
            DFS(adj, n, i);
        }
    }
}

int main() {
    int n;   // number of vertices
    printf("Enter number of vertices: ");
    scanf("%d", &n);

    int adj[MAX][MAX];
    printf("Enter adjacency matrix (%d x %d):\n", n, n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &adj[i][j]);
        }
    }

    // initialize visited array
    for (int i = 0; i < n; i++) {
        visited[i] = 0;
    }

    int start;
    printf("Enter starting vertex (0 to %d): ", n-1);
    scanf("%d", &start);

    printf("DFS Traversal: ");
    DFS(adj, n, start);

    return 0;
}