#include <stdio.h>
#include <ctype.h> // For tolower() and isalpha()

int main() {
    char s[100] = "jai maharashtra";
    int vowel = 0, conso = 0;
    int i = 0;

    while (s[i] != '\0') {
        char curren = tolower(s[i]); // Handle both upper and lower cases
        if (isalpha(curren)) { // Only process alphabetic characters
            if (curren == 'a' || curren == 'e' || curren == 'i' || curren == 'o' || curren == 'u') {
                vowel++;
            } else {
                conso++;
            }
        }
        i++;
    }

    printf("Vowels: %d\n", vowel);
    printf("Consonants: %d\n", conso);

    return 0;
}
 