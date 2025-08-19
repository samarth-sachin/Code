#include <stdio.h>

struct Student {
    int roll;
    char name[100];
    int marks1;
    int marks2;
    int marks3;
    int marks4;
    int marks5;
};

int main() {
    struct Student e[3];

    // Input
    for (int i = 0; i < 3; i++) {
        printf("\nEnter details of student %d\n", i + 1);

        printf("Enter roll no: ");
        scanf("%d", &e[i].roll);

        printf("Enter name: ");
        scanf("%s", e[i].name);

        printf("Enter marks of subject 1: ");
        scanf("%d", &e[i].marks1);

        printf("Enter marks of subject 2: ");
        scanf("%d", &e[i].marks2);

        printf("Enter marks of subject 3: ");
        scanf("%d", &e[i].marks3);

        printf("Enter marks of subject 4: ");
        scanf("%d", &e[i].marks4);

        printf("Enter marks of subject 5: ");
        scanf("%d", &e[i].marks5);
    }

    // Calculate total, average, and grade
    for (int i = 0; i < 3; i++) {
        int total = e[i].marks1 + e[i].marks2 + e[i].marks3 + e[i].marks4 + e[i].marks5;
        float avg = total / 5.0;

        char grade;

        // Grade logic using logical operators
        if (avg >= 90 && avg <= 100)
            grade = 'A';
        else if (avg >= 75 && avg < 90)
            grade = 'B';
        else if (avg >= 60 && avg < 75)
            grade = 'C';
        else if (avg >= 40 && avg < 60)
            grade = 'D';
        else
            grade = 'F';

        // Output
        printf("\nStudent %d Result:\n", i + 1);
        printf("Roll No: %d\n", e[i].roll);
        printf("Name: %s\n", e[i].name);
        printf("Total Marks: %d\n", total);
        printf("Average: %.2f\n", avg);
        printf("Grade: %c\n", grade);
    }

    return 0;
}
