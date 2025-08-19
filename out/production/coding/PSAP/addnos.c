#include <stdio.h>
int main()
{
    int a, b, sum; // Declare variables
    printf("Enter two numbers: "); // Prompt the user
    scanf("%d %d", &a, &b); // Read two integers from the user
    sum = a + b; // Perform addition
    printf("The sum is: %d\n", sum); // Print the result
    return 0; // Return 0 to indicate successful execution
}
