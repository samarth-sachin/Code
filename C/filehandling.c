#include <stdio.h>

struct student
{
    int roll;
    char name[30];
};

int main()
{
    int n, tu;
    
    printf("Enter 1 to add a student\n");
    printf("Enter 2 to view student records\n");
    printf("Enter your choice: ");
    scanf("%d", &tu);

    switch (tu)
    {
        case 1:
        {
            printf("Enter the number of students you want to add: ");
            scanf("%d", &n);

            FILE *f = fopen("student.txt", "a"); // Append mode to keep previous records
            
            if (f == NULL)
            {
                printf("Error opening file.\n");
                return 1;
            }

            struct student s[n];

            for (int i = 0; i < n; i++)
            {
                printf("Enter roll number: ");
                scanf("%d", &s[i].roll);

                printf("Enter name: ");
                scanf("%s", s[i].name);

                fprintf(f, "%d %s\n", s[i].roll, s[i].name); // Write to file
            }

            fclose(f); // Close the file
            
            printf("Student data added successfully.\n");
            break;
        }

        case 2:
        {
            FILE *t = fopen("student.txt", "r"); // Read mode
            
            if (t == NULL)
            {
                printf("Error opening file or no data found.\n");
                return 1;
            }

            char line[50];
            printf("Stored Student Records:\n");

            while (fgets(line, sizeof(line), t) != NULL) // Read line by line
            {
                printf("%s", line); // Print each line
            }

            fclose(t); // Close the file
            break;
        }

        default:
            printf("Invalid choice. Please enter 1 or 2.\n");
            break;
    }

    return 0;
}
