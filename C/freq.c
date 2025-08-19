#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char str[100];
    int freq[256] = {0}; // ASCII size
    printf("Enter a string:\n");
    fgets(str, sizeof(str), stdin);

    // Count frequency
    for (int i = 0; str[i] != '\0'; i++) {
        char ch = str[i];
        if (ch != '\n') {
            freq[(int)ch]++;
        }
    }

    // Display frequencies of characters that appear at least once
    printf("\nCharacter Frequencies:\n");
    for (int i = 0; i < 256; i++) {
        if (freq[i] > 0 && i != ' ') {
            printf("Frequency of %c: %d\n", i, freq[i]);
        }
    }

    return 0;
}
 