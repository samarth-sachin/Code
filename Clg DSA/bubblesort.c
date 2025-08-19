#include <stdio.h>
void bubble(int arr[],int n)
{ for(int i=0;i<n-1;i++)
    {
        for(int j=0;j<n-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                int temp=arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=temp;
            }
        }
    }
    

}
int main()
{ int arr[]={6,4,1,7};
   int n=4;
   bubble(arr,n);
   for(int i=0;i<n;i++)
   { printf("%d:",arr[i]);

   }

}