#include <stdio.h>
int main ()
{
 char s[100];
//  char current[50];
 int digits=0;
 int alphabets=0;

 printf("Enter a string: ");

    fgets(s, sizeof(s), stdin);
    int i=0;
  while (s[i]!='\0')
  { char current_char=s[i]; 
    if ((current_char >= 'a' && current_char <= 'z') || (current_char >= 'A' && current_char <= 'Z')) {
            alphabets++;
        }
      
        else if (current_char >= '0' && current_char <= '9') {
            digits++;
        }
      
    }
    printf("%d",digits);
    printf("%d",alphabets);

    
  }
  
