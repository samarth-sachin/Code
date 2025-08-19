#include <stdio.h>
void main()
{ char s[100];
  int open=0;
  int close=0;
  printf("enter a string");
  fgets(s,sizeof(s),stdin);
  int i=0;
  while(s[i]!=0)
  { char current=s[i];
    if(s[i]=='('||s[i]=='[')
    {
      open++;
    }
    else if(s[i]==')'||s[i]==']')
    {
      close++;
    }
    i++;
    
  }
  if(open==close)
  {
    printf("jai mahar");
  }
else
{
  printf("nahi ga");
}
}