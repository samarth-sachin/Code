#include <stdio.h>
void selection(int arr[],int n)
{
    for(int i=0;i<n-1;i++)
    {
        int min=i;
        for(int j=i+1;j<n;j++)
        {
            if(arr[min]>arr[j])
            {
                min=j;
            }
        }
        int temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
}
int main()
{ int arr[]={7,1,8,2};
int n=4;
selection(arr,n);
  for(int i=0;i<n;i++)
   { printf("%d:",arr[i]);

   }
}