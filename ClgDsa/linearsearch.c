#include <stdio.h>
void input(int arr[],int target)
{  int pos=-1;
    for (int i=0;i<5;i++)
    { if(arr[i]==target)
        {
            printf("Target is found at:%d\n",i);
            pos=0;
            break;
        }
        if(pos==-1)
        {
             printf("Target not found\n");
             break;
        }
        

    }
   

}
void main()
{ int arr[50],n;
    printf("Enter the no of elements\n");
    scanf("%d",&n);
    printf("Enter elements:\n");
    for(int i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    
int target;
printf("Elements of array\n");
for(int i=0;i<n;i++)
{
    printf("%d\n",arr[i]);
}
printf("Enter the target\n");
scanf("%d",&target);
input(arr,target);
    
}
//student s1=new student();