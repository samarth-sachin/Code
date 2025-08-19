#include <stdio.h>

int main() {
    // 1. Add two integers
    int num1 = 5, num2 = 10;
    printf("Sum: %d\n", num1 + num2);

    // 2. Boolean variables & Logical operations
    int bool1 = 1, bool2 = 0;
    printf("AND: %d\n", bool1 && bool2);
    printf("OR: %d\n", bool1 || bool2);
    printf("NOT Bool1: %d\n", !bool1);

    // 3. Average of five numbers
    int a = 10, b = 20, c = 30, d = 40, e = 50;
    printf("Average: %d\n", (a + b + c + d + e) / 5);

    // 4. Expressions evaluation
    int S = a + b * c;
    int X = a + b * c / d % 2;
    int Y = d * 2 / a - b;
    int Z = a + b * c - (d++) / e;
    int Z1 = a % b + 5 * c / 3 * d;
    int Z2 = a ^ b + c % d - a - 3 * c;
    printf("S: %d, X: %d, Y: %d, Z: %d, Z1: %d, Z2: %d\n", S, X, Y, Z, Z1, Z2);

    // 5. Ternary operator
    printf("Larger: %d\n", (a > b) ? a : b);

    // 6. Conditional branching
    if (a > b) {
        printf("Largest: %d\n", a);
    } else {
        printf("Largest: %d\n", b);
    }

    // Nested if-else
    int c1 = 25;
    if (a > b && a > c1) {
        printf("Largest: %d\n", a);
    } else if (b > c1) {
        printf("Largest: %d\n", b);
    } else {
        printf("Largest: %d\n", c1);
    }

    // Else-if ladder - Percentage grade
    int marks ;
printf("enter marks of the student");
scanf("%d",&marks);
if (marks >= 90) {
    printf("Grade: A\n");
} else if (marks >= 75) {
    printf("Grade: B\n");
}
else if (marks >=50) {
    printf("Grade: C\n");}
 else {
    printf("Grade: D\n");
}
    // 7. Switch-case grade
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

    // Loops
    printf("For Loop:\n");
    for (int i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\n");

    printf("While Loop:\n");
    int j = 1;
    while (j <= 10) {
        printf("%d ", j);
        j++;
    }
    printf("\n");

    printf("Do-While Loop:\n");
    int k = 1;
    do {
        printf("%d ", k);
        k++;
    } while (k <= 10);
    printf("\n");

    // Menu-driven
    printf("Addition: ");
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("%d\n", sum);

    printf("Average of first 10: ");
    int count = 1, total = 0;
    while (count <= 10) {
        total += count++;
    }
    printf("%d\n", total / 10);

    printf("Square using do-while: ");
    int l = 1;
    do {
        printf("%d ", l * l);
        l++;
    } while (l <= 10);
    printf("\n");

    // Break and Continue
    for (int m = 1; m <= 10; m++) {
        if (m == 8) {
            continue;
        }
        if (m % 2 == 0) {
            printf("%d ", m);
        }
       
    }

    return 0;
}
