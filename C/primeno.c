#include <stdio.h>
int main()
{ int a,b;
    printf("enter a nos");
    scanf("%d %d",&a,&b);
    // for(int i=a;i<=b;i++)
    // {
        
    // }
   
    while (a<=b)
    {  int count=0;
        for(int i=1;i<=a;i++)
        {
            if(a%i==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            printf("%d",a);
        }
        a++;
        
    }
    
    
}