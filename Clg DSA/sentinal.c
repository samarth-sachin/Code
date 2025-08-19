#include <stdio.h>
void sentinal(int arr[],int target,int n)
{ int last=arr[n-1];
    arr[n-1]=target;
    int i=0;
    while(arr[i]!=target)
    { i++; 
        arr[n-1]=last;
    

    }
    if(i<n-1 || arr[n-1]==target)
    {
        printf("Element found");
    }
    else 
    {
        printf("Element not found");
    }

}
int main()
{ int arr[]={1,2,3,4,5};
int target=4;
int n=5;
sentinal(arr,target,n);
return 0;

}