#include <iostream>
#include <vector>
using namespace std;

void f(vector<int> &v) {
    int n = v.size();
    for (int i = n; i > 0; i--) {
        bool flag = false;
        int j = 0;
        while (j < i - 1) {
            if (v[j] == 0 && v[j + 1] != 0) {
                swap(v[j], v[j + 1]);
                flag = true;
            }
            j++; // Increment j to avoid infinite loop
        }
        if (!flag) break;
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i]; // Corrected to read input into the vector
    }
    f(v);
    for (int i = 0; i < n; i++) {
        cout << v[i] << " "; // Added space for better readability
    }
    return 0; // Added return statement for main function
}

