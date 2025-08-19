#include <stdio.h>
#include <conio.h>
int main()
 {
//     Write a Program to Accept String from the user. Perform the following operations on 
// the String (Without Using Built in Functions): 
// a. Print String Length 
char str1[100];
char str2[100];
char str3[100];
printf("enter a string: ");
scanf("%s",str1);
int length,i=0;
while(str1[length]!='\0')
{
    length++;
}
printf("%d",length);
printf("\n");
// b. Print String in reverse order 
for( i=length-1;i>=0;i--)
{ printf("%c",str1[i]);

}
printf("\n");
// c. Copy given string into other string and print both strings. 
for(int i=0;i<=length;i++)
{
    str2[i]=str1[i];
}
printf("the original string is :%s",str1);
printf("\n");
printf("the duplicate string is :%s",str2);
printf("\n");

// d. Accept two strings from user and compare both. Print if they are equal. Or which  one is greater or which one is small.
printf("enter another string to compare :");
scanf("%s",str3);
i=0;
while(str1[i]!='\0'&&str2[i]!='\0')
{
    if(str1[i]>str3[i])
    {
        printf("string 1 is bigger string");
        break;
    }
    else if(str1[i]<str2[i])
    {
        printf("string 2 is bigger string");
        break;
    }
    i++;
    if(str1[i]=='\0'&&str2[i]=='\0')
    {
        printf("both strings are equal");
    }
}


 

// e.  Accept two strings from user and print its concatenated string.
}