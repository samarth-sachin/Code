#include <stdio.h>
void quick(int arr[],int low ,int high)
{ int i,j,pivot,temp;
    if(low<high)
    { i=low;
        j=high;
        pivot=low;
        while(i<j)
        {
            while (arr[i]<=arr[pivot] && i<high)
            {
                 i++;
                 while (arr[j]>arr[pivot])
                 {
                    j--;
                    if(i<j)
                    {
                        temp=arr[i];
                        arr[i]=arr[j];
                        arr[j]=temp;
                    }
                 }
                 
            }
            
        }
        temp=arr[pivot];
        arr[pivot]=arr[j];
        arr[j]=temp;
        quick(arr,low,j-1);
        quick(arr,j+1,high);

    }


}
int main()
{ int arr[]={7,6,5,4,1};
int n=5;
 quick(arr,0,n-1);
 for(int i=0;i<n;i++)
 {
    printf("%d",arr[i]);
 }


}