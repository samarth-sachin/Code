#include <stdio.h>
void main()
{
    int arr[10], n, sum = 0, op, min, max;
    int find;
    char ch = 'y'; 
    printf("How many numbers do you want to enter? ");
    scanf("%d", &n);
    do
    {
        printf("-------------------------------");
        printf("\n1. Enter array elements");
        printf("\n2. See array elements");
        printf("\n3. Addition of array elements");
        printf("\n4. Min and max in array elements");
        // printf("\n5. Enter a no to find in array");
        printf("\nEnter your choice: ");
        scanf("%d", &op);

        switch (op)
        {
        case 1:
            printf("Enter the values of integers: ");
            for (int i = 0; i < n; i++)
            {
                scanf("%d", &arr[i]);
            }
            break;

        case 2:
            printf("The array elements are: ");
            for (int i = 0; i < n; i++)
            {
                printf("%d ", arr[i]);
            }
            printf("\n");
            break;

        case 3:
            sum = 0; // Reset sum before each addition operation
            for (int i = 0; i < n; i++)
            {
                sum += arr[i];
            }
            printf("The sum of the array elements is: %d\n", sum);
            break;

        case 4:
            min = arr[0];
            max = arr[0];
            for (int i = 0; i < n; i++)
            {
                if (min > arr[i])
                {
                    min = arr[i];
                }
                if (max < arr[i])
                {
                    max = arr[i];
                }
            }
            printf("Minimum number in the array is: %d\n", min);
            printf("Maximum number in the array is: %d\n", max);
            break;
            // case 5:
            // printf("enter a no");
            // scanf("%d",&find);
            // for (int i=0; i<n;i++)
            // {
            //     if(find==arr[i])
            //     {
            //         printf(" the location is %d", i);
            //     }
            // }
            // break;

        default:
            printf("Invalid choice! Please try again.\n");
            break;
        }

        printf("Do you want to continue? (y/n): ");
        scanf(" %c", &ch); 
    } while (ch == 'y');
    //linear search
    
    int array[100];
    int search;
    int i;
    int number;

    printf("Enter the number of elements in array\n");
    scanf("%d", &number);

    printf("Enter the %d numbers\n", number);

    for (i = 0; i < number; i++)
    {
        scanf("%d", &array[i]);
    }

    printf("Enter the number to search\n");
    scanf("%d", &search);

    i = 0; // Initialize i outside of loop
    while (i < number)
    {
        if (array[i] == search)
        {
            printf("%d is present at location %d.\n", search, i + 1);
            break; // Stop loop if found
        }
        i = i + 1; // Increment i manually
    }

    if (i == number) // Check if the loop completed without finding the element
    {
        printf("%d is not present in the array.\n", search);
    }
    


}
