#include <stdio.h>
// void selection(int arr[])
// { for(int i=0;i<n;i++)
// }{ for(int j=0;j<n-1-i;j++)
//     {
//         if(arr[j]>arr[j+1]){
//             int temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }

// }
void selection(int arr[],int n)
{
    for(int i=0;i<n-1;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(arr[i]>arr[j])
            {
                int temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
void insertion(int arr[],int n)
{
    for(int i=0;i<n;i++)
    { int key=arr[i];
        for(int j=i+1;j>=0;j--)
        {
            if(arr[j]>key)
            { arr[j+1]=arr[j];
                arr[j]=key;

            }
        }
    }
}


void main()
{ int arr[]={2,1};
  int n=2;
  insertion(arr,n);
  for(int i=0;i<n;i++)
  {
    printf("%d->",arr[i]);
  }

}