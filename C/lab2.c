#include <stdio.h>
void main()
{
    // int n,i,sum=0;
    // float avg;
    // printf("enter the value of n ");
    // scanf("%d",&n);
    // for(i=0;i<=n;i++)
    // {
    //     sum=sum+i;
    // }
    // printf("the sum of natural nos is%d",sum);
    //float=sum/n;
    // while(i<n)
    // {
    //   sum=sum+i;
    //   printf("%d the sum is",sum);
    // }
    
    // printf("\nthe average of the first n natural nos %df",avg);
  //  int i=0,n,sum=0;
  //    printf("enter the value of n ");
  //     scanf("%d",&n);
//    do
//    { printf("%d\nthe nos are ",i);
//      sum=sum+i;

//     i++;
//     /* code */
//    } while (i<=n);
//    printf("\nthe sum is equal to %d",sum);
//    float avg=sum/n;
//    printf("\nthe average of the first n natural nos %f",avg);
    //int j=0,square=1;
//    for(j=0;j<n;j++)
//    {square=j*j;
//     printf("\n %d the square of nos are%d",j,square);

  // }
  //  do
  //  { square=j*j;
  //   j=j+1;
  //   printf("\n%d the square of no is %d",j,square);
  //   /* code */
  //  } while (j<n);
    // while(i<n)
    // {
    //   square=j*j;
    //j=j+1;
    //   printf("\n%d the square of no is %d",j,square);
    // }
    // Prompt for input
    int a,b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b); // Correct formatting for scanf

    if (a > b)
    {
        printf("\n%d is greater than %d", a, b);
    }
    else if (a < b) // Add this condition for clarity
    {
        printf("\n%d is greater than %d", b, a);
    }
    else
    {
        printf("\nBoth numbers are equal."); // Handle the case when a == b
    }

int x,y,z;
printf("enter three nos:");
scanf("%d %d %d",&x,&y,&z);
if (x>y && x>z)
{ printf("%d is the biggest no",x);

}
else if(y>x && y>z )
{ printf("%d is the biggest no",y);

}
else if(z>x && z>y)

{
  printf("%d is the biggest no",z);
}
else{
  printf("all three are the same");
}
int percent;
    char ch;
    
    do {
        printf("Enter your percentage: ");
        scanf("%d", &percent);

        switch (percent) {
            case 75 ... 100:
                printf("Grade A: First class with distinction\n");
                break;
            case 60 ... 74:
                printf("Grade B: First class\n");
                break;
            case 50 ... 59:
                printf("Grade C: Second class\n");
                break;
            case 35 ... 49:
                printf("Grade D: Pass class\n");
                break;
            case 0 ... 34:
                printf("Grade F: Fail\n");
                break;
            default:
                printf("Invalid percentage\n");
                break;
        }
    } while (ch == 'y' || ch == 'Y');

  
  }

