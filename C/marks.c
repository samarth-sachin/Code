#include <stdio.h>
#include <string.h>

#define MAX_NAME_LEN 50
#define MAX_MOBILE_LEN 15
#define SUBJECTS 5

typedef struct {
    char name[MAX_NAME_LEN];
    char mobile[MAX_MOBILE_LEN];
    int marks[SUBJECTS];
    int total;  // sum of marks
} Student;

void swap(Student *a, Student *b) {
    Student temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int n;
    printf("Enter number of students: ");
    scanf("%d", &n);

    Student students[n];

    // Input student details
    for (int i = 0; i < n; i++) {
        printf("\nEnter details of student %d\n", i + 1);
        printf("Name: ");
        scanf(" %[^\n]s", students[i].name);  // Read string with spaces

        printf("Mobile number: ");
        scanf(" %[^\n]s", students[i].mobile);

        students[i].total = 0;
        printf("Enter marks of %d subjects:\n", SUBJECTS);
        for (int j = 0; j < SUBJECTS; j++) {
            scanf("%d", &students[i].marks[j]);
            students[i].total += students[i].marks[j];
        }
    }

    // Sort students by total marks (descending)
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (students[j].total < students[j + 1].total) {
                swap(&students[j], &students[j + 1]);
            }
        }
    }

    // Print top 5 students (or less if n < 5)
    int top = (n < 5) ? n : 5;
    printf("\nTop %d students based on total marks:\n", top);
    for (int i = 0; i < top; i++) {
        printf("\nStudent %d:\n", i + 1);
        printf("Name: %s\n", students[i].name);
        printf("Mobile: %s\n", students[i].mobile);
        printf("Marks: ");
        for (int j = 0; j < SUBJECTS; j++) {
            printf("%d ", students[i].marks[j]);
        }
        printf("\nTotal Marks: %d\n", students[i].total);
    }

    return 0;
}
