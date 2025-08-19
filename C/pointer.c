// 1. Write a C program to create, initialize and use pointers to add two numbers. 
#include <stdio.h>

int main() { // Use int main() instead of void main() for better practice
    int a, b, sum;
    int *p1, *p2;

  

    printf("Enter two integers:\n"); // Add a prompt for the user

    // Correct usage of scanf: provide the address where the input should be stored
    scanf("%d", &a); // Read the first integer into the memory location pointed to by p1 (which is 'a')
    scanf("%d", &b); // Read the second integer into the memory location pointed to by p2 (which is 'b')
      p1 = &a; // p1 points to the memory location of a
    p2 = &b; // p2 points to the memory location of b

    sum = *p1 + *p2; // Dereference the pointers to get the values of a and b and add them

    printf("Sum: %d\n", sum); // Print the calculated sum
    // 2. Write a C program to reverse an array using pointers. 
     int ar[]={1,2,3,4};
   int size=4;
int *start=ar;
int *end=ar+size-1;
while(start<end)
{
    int temp=*start;
   * start=*end;
    *end=temp;
    // PROBLEM 1: Array declaration is inside the loop!
     // This re-initializes the array in *every* iteration!


    start++;
    end--;
}
// PROBLEM 2: Incorrect printf for an array
for (int i = 0; i < size; i++)
{ printf("%d",ar[i]);
    /* code */
}

 // This tries to print the array's memory address as an integer
// 3. Write a C program to search an element in array using pointers. 
#include <stdio.h>

int main() {
    int arr[] = {10, 25, 5, 42, 18, 33, 7}; // Sample array
    int size = sizeof(arr) / sizeof(arr[0]); // Calculate the number of elements
    int target;                               // Element to search for

    // Declare and initialize a pointer to the beginning of the array
    int *current_ptr = arr; // or &arr[0];

    // Calculate a pointer to the position *just after* the last element
    int *end_ptr = arr + size; // This marks the end boundary for our loop

    int found = 0;      // Flag to indicate if the element was found
    int index = -1;     // Variable to store the index if found

    printf("Array elements: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("Enter the element you want to search: ");
    scanf("%d", &target);

    // Use the pointer to iterate through the array
    while (current_ptr < end_ptr) {
        // Dereference the pointer to get the value at the current position
        if (*current_ptr == target) {
            found = 1; // Set the flag to true
            // Calculate the index: The difference between the current pointer and the base address of the array
            index = current_ptr - arr;
            break; // Element found, no need to continue searching
        }

        // Move the pointer to the next element
        current_ptr++; // Pointer arithmetic automatically moves to the next integer
    }

    // Print the result based on the 'found' flag
    if (found) {
        printf("Element %d found in the array at index %d.\n", target, index);
    } else {
        printf("Element %d not found in the array.\n", target);
    }

    return 0; // Indicate successful execution
}


// 4. Write a C program to demonstrate pointer arithmetic (increment pointer)
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50}; // An array of integers
    int size = sizeof(arr) / sizeof(arr[0]); // Calculate the number of elements

    // Declare an integer pointer and make it point to the first element
    int *ptr = arr; // 'arr' decays to a pointer to its first element (&arr[0])

    printf("Demonstrating Pointer Increment:\n\n");

    // --- Before Increment ---
    printf("Initial Pointer Value:\n");
    printf("  Address pointed to by ptr: %p\n", ptr);
    printf("  Value at the address (*ptr): %d\n", *ptr); // Dereference to get the value
    printf("  Size of int (bytes): %zu\n", sizeof(int)); // Show the size of the data type

    // --- Increment the Pointer ---
    ptr++; // Increment the pointer

    // --- After Increment ---
    printf("\nAfter ptr++ (Incrementing the pointer):\n");
    printf("  New Address pointed to by ptr: %p\n", ptr);
    printf("  Value at the new address (*ptr): %d\n", *ptr); // Dereference the new address

    // Let's increment it again to show it moves through the array
    ptr++;
    printf("\nAfter another ptr++:\n");
    printf("  New Address pointed to by ptr: %p\n", ptr);
    printf("  Value at the new address (*ptr): %d\n", *ptr);


    // You can also increment using pointer arithmetic directly
    ptr = ptr + 2; // Moves the pointer forward by 2 * sizeof(int)
     printf("\nAfter ptr = ptr + 2:\n");
    printf("  New Address pointed to by ptr: %p\n", ptr);
    printf("  Value at the new address (*ptr): %d\n", *ptr);


    return 0;
}