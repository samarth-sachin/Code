#include <stdio.h>
int main()
{
    int a,b,add,multi,sub,div;
    printf("enter two nos you wanna add");
    scanf("%d%d",&a,&b);
    add=a+b;
    printf("the addion is %d",add);
    multi=a*b;
    printf("the multiplication is%d",multi);
    sub=a-b;
    printf("the substraction is%d",sub);
    div=a/b;
    printf("the division is%d",div);





    int m,n,l;
    printf("enter no to swap");
    scanf("%d%d",&m,&n);
    // c=a;
    //  a=b;
    //  b=c;
    
    m=m+n;
    n=m-n;
    m=m-n;
    printf("%d",m);
    printf("\n%d",n);
}