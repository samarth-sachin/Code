// 1. Check prime and Armstrong number by using functions.
#include <stdio.h>
#include <math.h>
#include <string.h>

void isprime(int n) {
    int count = 0;
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        printf("%d is a prime number\n", n);
    } else {
        printf("%d is not a prime number\n", n);
    }
}

void armstrong(int m) {
    int c = m;
    int temp = m; // Store the original number for comparison
    int count = 0;
    int remainder;
    int sum = 0;

    // Count the number of digits
    while (c != 0) {
        c = c / 10;
        count++;
    }

    // Calculate the sum of digits raised to the power of the number of digits
    c = temp; // Reset c to the original number
    while (c != 0) {
        remainder = c % 10;
        sum = sum + pow(remainder, count);
        c = c / 10;
    }

    // Check if the sum is equal to the original number
    if (temp == sum) {
        printf("%d is an Armstrong number\n", temp);
    } else {
        printf("%d is not an Armstrong number\n", temp);
    }
}

// 6. Calculate the factorial of a number using recursion


int factorial(int k)
{ if(k==0||k==1)
    {
        return 1;
    }
    else
    {
        return k*factorial(k-1);
    }

}
// 3. Write a program to find perfect number in between 1 to 50 using function. 
void perfect(int s)
{ int sum=0;
    
    for(int i=1;i<s;i++)
    {
        if(s%i==0)
        { sum=sum+i;

        }
    }
if(s==sum)
{
    printf("perfect no\n");
}
else{
    printf("not perfect\n");
}

}// 5. Write a program to find maximum and minimum number in an array using functions.
void minmax(int arr[])
{ 
int min = arr[0];
           int max = arr[0];
            for (int i = 0; i < 4; i++)
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
        }
        // 4. Write a program to swap two arrays using function. (Call by value) 



// Function to swap two arrays using call by value
void swapArrays(int arr1[], int size1, int arr2[], int size2) {
    if (size1 != size2) {
        printf("Arrays must have the same size for swapping.\n");
        return;
    }

    int temp;
    for (int i = 0; i < size1; i++) {
        temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
    }

    printf("Arrays swapped successfully\n");
}

// Function to print an array
void printArray(int arr[], int size, char name[]) {
    printf("%s: ", name);
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
// 2. Convert a binary number to decimal and vice-versa 
void decimaitobin(int p)
{ int binary[32]; 
    int i=0;

    
    
    while(p>0)

    { 
        binary[i]=p%2;
        p=p/2;
    i++;
       
    }
    for(int j=i-1;j>=0;j--)
    { printf("%d",binary[j]);

    }
    int binarytodec(char binary[])
    { int decimal=0;
        int power=0;
        int length=strlen(binary);
        for(int i=length-1;i>=0;i--)
        {
            if(binary[i]=='1')
            {
                decimal=decimal+pow(2,power);
            }
        } else if (binary[i] != '0') {
            printf("Invalid binary input. Please use only '0' and '1'.\n");
            return -1; // Indicate an error
        }
        power++;
    }
    return decimal;
        }

int main() {
    int n = 15;
    int m = 153;
    int k = 5;
    int s=7;
    isprime(n);
    armstrong(m);
    factorial(k);
    printf("the factorial is:%d\n",factorial(k));
    perfect(s);
int arr[]={1,2,3,4};
minmax(arr);
int array1[] = {1, 2, 3, 4, 5};
    int size1 = sizeof(array1) / sizeof(array1[0]);

    int array2[] = {10, 20, 30, 40, 50};
    int size2 = sizeof(array2) / sizeof(array2[0]);

    printf("Before swapping:\n");
    printArray(array1, size1, "Array 1");
    printArray(array2, size2, "Array 2");

    swapArrays(array1, size1, array2, size2);

    printf("\nAfter swapping:\n");
    printArray(array1, size1, "Array 1");
    printArray(array2, size2, "Array 2");
    int p=7;
    decimaitobin(p);
    char binary[]='111';
    binarytodec(binary);

    return 0;
}
