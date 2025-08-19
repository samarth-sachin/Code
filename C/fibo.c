#include <stdio.h>
int main()
{
    int next,a=0,b=1,n;
    printf("enter a no: ");
    scanf("%d",&n);
    for (int i = 0; i <n; i++)
    {
      printf("%d",a);
      next=a+b;
      a=b;
      b=next;
    }
    
}