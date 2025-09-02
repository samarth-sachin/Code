#include <stdio.h>
#include <string.h>

typedef struct student {
    int roll;
    char name[10];
    float cgpa; 
} student;

void input(student s[], int n) {
    for (int i = 0; i < n; i++) {
        getchar(); 
        printf("Enter name: ");
        fgets(s[i].name, sizeof(s[i].name), stdin);
        s[i].name[strcspn(s[i].name, "\n")] = '\0';

        printf("Enter roll no: ");
        scanf("%d", &s[i].roll);

        printf("Enter CGPA: ");
        scanf("%f", &s[i].cgpa);
    }
}

void Bubblesort(student s[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (s[j].roll > s[j + 1].roll) {
                student temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++) {
        printf("Roll No: %d, CGPA: %.2f, Name: %s\n", s[i].roll, s[i].cgpa, s[i].name);
    }
}

void selectionSort(student s[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (s[i].roll > s[j].roll) {
                student temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++) {
        printf("Roll No: %d, CGPA: %.2f, Name: %s\n", s[i].roll, s[i].cgpa, s[i].name);
    }
}

void insertionsort(student s[], int n) {
    for (int i = 1; i < n; i++) {
        student key = s[i];
       for(int j=i-1;j>=0;j--)
       {
          if(key.roll<s[j].roll)
          {
            s[j+1]=s[j];
            s[j]=key;
          }
       }
    }
    for (int i = 0; i < n; i++) {
        printf("Roll No: %d, CGPA: %.2f, Name: %s\n", s[i].roll, s[i].cgpa, s[i].name);
    }
}

int main() {
    int n;
    printf("Enter number of students: ");
    scanf("%d", &n);
    student students[n];
    input(students, n);

    int ch;
    printf("Choose sorting method:\n");
    printf("1. Bubble Sort\n2. Selection Sort\n3. Insertion Sort\n");
    scanf("%d", &ch);
 
    switch (ch) {
        case 1:
            Bubblesort(students, n);
            break;
        case 2:
            selectionSort(students, n);
            break;
        case 3:
            insertionsort(students, n);
            break;
        default:
            printf("Invalid choice\n");
    }
    return 0;
}
