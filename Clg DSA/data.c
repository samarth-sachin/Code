#include <stdio.h>
#include <string.h>

typedef struct student {
    char name[10];
    int roll;
    float cgpa;
} student;

void input(student s[], int n) {
    for (int i = 0; i < n; i++) {
        printf("Enter name: ");
        scanf("%s", s[i].name);
        // fgets(s[i].name, sizeof(s[i].name), stdin);
        // s[i].name[strcspn(s[i].name, "\n")] = '\0';  

        printf("Enter roll no: ");
        scanf("%d", &s[i].roll);

        printf("Enter CGPA: ");
        scanf("%f", &s[i].cgpa);
        getchar(); 
    }
}

void linear(student s[], int n) {
    int roll, found = 0;
    printf("Enter roll no to search: ");
    scanf("%d", &roll);

    for (int i = 0; i < n; i++) {
        if (s[i].roll == roll) {
            printf("Roll No: %d\n", s[i].roll);
            printf("CGPA: %.2f\n", s[i].cgpa);
            printf("Name: %s\n", s[i].name);
            found = 1;
            break;
        }
    }
    if (!found) {
        printf("Student with roll no %d not found.\n", roll);
    }
}
void sorted(student s[], int n)
{   for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (s[j].roll > s[j + 1].roll) {
                student temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp;
            }
        }

    }
    for(int i=0;i<n;i++ )
    {   printf("Roll No: %d\n", s[i].roll);
        printf("CGPA: %.2f\n", s[i].cgpa);
        printf("Name: %s\n", s[i].name);

    }
}

void binary(student s[], int n) {
    int roll, found = 0;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (s[j].roll > s[j + 1].roll) {
                student temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp;
            }
        }
    }

    printf("Enter roll no to search: ");
    scanf("%d", &roll);

    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (s[mid].roll < roll) {
            low = mid + 1;
        } else if (s[mid].roll > roll) {
            high = mid - 1;
        } else {
            printf("Student found at index %d:\n", mid);
            printf("Roll No: %d\n", s[mid].roll);
            printf("CGPA: %.2f\n", s[mid].cgpa);
            printf("Name: %s\n", s[mid].name);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("Student with roll no %d not found.\n", roll);
    }
}

int main() {
    int n;
    printf("Enter number of students: ");
    scanf("%d", &n);
    getchar(); 

    student students[n];

    input(students, n);  

    int ch;
    printf("\n1. Linear Search\n");
    printf("2. Binary Search\n");
    printf("3.Sorted Manner\n");
    printf("Enter choice: ");
    scanf("%d", &ch);

    switch (ch) {
        case 1:
            linear(students, n);
            break;
        case 2:
            binary(students, n);
            break;
        case 3:
            sorted(students,n);
            break;
        default:
            printf("Invalid choice.\n");
            break;
    }

    return 0;
}
