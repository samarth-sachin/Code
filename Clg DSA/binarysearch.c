#include <stdio.h>

void binary(int arr[], int target) {
    int low = 0;
    int high = 4;  

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] < target) {
            low = mid + 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            printf("The number is at index: %d\n", mid);
            return;
        }
    }

    printf("Not found\n");
}
void input(int arr[],int target)
{ for (int i=0;i<5;i++)
    { if(arr[i]==target)
        {
            printf("Target is found at:%d",i);
        }

    }

}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int target = 3;
    int s;
    printf("1.Linear Search\n");
    printf("2.Binary Search\n");
    printf("<--------------->\n");
    printf("Enter no\n");
    scanf("%d",&s);
    switch (s)
    {
    case 1:
        input(arr,target);
        break;
    case 2:
        binary(arr,target);
        break;
    
    default:
        break;
    }

    return 0;
}
