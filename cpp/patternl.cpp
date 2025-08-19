#include <iostream>

int main() {
    for (int i = 0; i < 4; i++) { 
        for (int j = 0; j < 4; j++) { // Corrected loop
            if (i == 0 || i == 3 || j == 0 || j == 3) {
                std::cout << "*";
            } else {
                std::cout << " ";
            }
        }
        std::cout << std::endl; // Move to the next line after printing a row
    }
    return 0;
}
