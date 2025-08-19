#include <stdio.h>
int main()
{
  char s[100]="codeleet";
  char c[100];
  int arr[]={4,5,6,7,0,2,1,3};
  int len=8;
  int tar;
 for(int i=0;i<len;i++)
 { c[arr[i]] = s[i];
 }
 printf("%s",c);
}