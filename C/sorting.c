
#include <stdio.h>

void main()
{
    int array[100];
    int n, temp;

    // Input array length
    printf("How many elements do you want in the array? ");
    scanf("%d", &n);

    // Input array elements
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &array[i]);
    }

    // Bubble sort algorithm
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (array[i] > array[j])
            {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    // Print the sorted array
    printf("The sorted array is:\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\t", array[i]);
    }
    printf("\n");
   



    int minIndex;

    // Input array length
    printf("How many elements do you want in the array? ");
    scanf("%d", &n);

    // Input array elements
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &array[i]);
    }

    // Selection sort algorithm
    for (int i = 0; i < n - 1; i++)
    {
        minIndex = i; // Assume the current element is the minimum

        for (int j = i + 1; j < n; j++)
        {
            if (array[j] < array[minIndex])
            {
                minIndex = j; // Update the index of the minimum element
            }
        }

        // Swap the minimum element with the first element of the unsorted part
        if (minIndex != i)
        {
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    // Print the sorted array
    printf("The sorted array is:\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\t", array[i]);
    }
    printf("\n");
}




