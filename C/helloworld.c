#include <stdio.h>
void main()
{ int marks=10;
    switch (marks / 10) {
        case 10:
        case 9: {
            printf("Grade: A\n");
            break;
        }
        case 8:
        case 7: {
            printf("Grade: B\n");
            break;
        }
        default: {
            printf("Grade: C\n");
        }
}
}
