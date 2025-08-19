#include <stdio.h>
void main()
{  int a,b,c;
    printf("Enter two nos\n");
    scanf("%d",&a);
    scanf("%d",&b);
    printf("1:Add\n");
    printf("2:Sub\n");
    printf("3:Multi\n");
    printf("4:Divide\n");
    printf("<----------->\n");
  printf("Enter a no\n");
  scanf("%d",&c);
  switch (c)
  {
  case 1:
  int d=a+b;
  printf("addition is:%d\n",d);
    /* code */
    break;
  case 2:
  int e=a-b;
  printf("sub is %d\n",e);
  break;
  case 3:
  int f=a*b;
  printf("multi is:%d\n",f);
  break;
  case 4:
  int g=a/b;
  printf("divide is:%d\n",g);
  break;
  default:
    break;
  }
}
// i love "java"