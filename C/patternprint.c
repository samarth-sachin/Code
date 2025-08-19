#include <stdio.h>

int main() {
    for(int i=0;i<=5;i++)
    {
        for (int j = 0; j < i; j++)
        {
            printf("%d  ",1+j);
        }
        printf("\n");
        
    }
    // for (int i = 0; i <= 5; i++) {
    //     for (int j = 0; j < i; j++) {
    //         printf("%c   ", 'A' + j);  // Use %c for characters
    //     }
    //     printf("\n");
    // }

    // for (int i = 4; i >= 1; i--) {
    //     for (int j = 0; j < i; j++) {
    //         printf("%c   ", 'A' + j);  // Use %c for characters
    //     }
    //     printf("\n");
    // }
        for (int i = 4; i >= 1; i--) {
        for (int j = 0; j < i; j++) {
            printf("%c   ", 'E' - j);  // Use %c for characters
        }
        printf("\n");
    }



    return 0;
}
