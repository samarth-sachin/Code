#include <stdio.h>

// quickk
void quickSort(int arr[], int low, int high) {
    int i, j, pivot, temp;
    if (low < high) {
        i = low;
        j = high;
        pivot = low;
        while (i < j) {
            while (arr[i] <= arr[pivot] && i < high)
                i++;
            while (arr[j] > arr[pivot])
                j--;
            if (i < j) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        temp = arr[pivot];
        arr[pivot] = arr[j];
        arr[j] = temp;
        quickSort(arr, low, j - 1);
        quickSort(arr, j + 1, high);
    }
}

//  bublle
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - 1 - i; j++)
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}

// insett
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Selection Sort
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = i + 1; j < n; j++)
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
}


void display(int arr[], int n) {
    printf("Sorted Array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    int arr[100], n, choice;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    printf("\nChoose Sorting Method:\n");
    printf("1. Quick Sort\n");
    printf("2. Bubble Sort\n");
    printf("3. Insertion Sort\n");
    printf("4. Selection Sort\n");
    printf("Enter nos: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            quickSort(arr, 0, n - 1);
            break;
        case 2:
            bubbleSort(arr, n);
            break;
        case 3:
            insertionSort(arr, n);
            break;
        case 4:
            selectionSort(arr, n);
            break;
        default:
            printf("Invalid choice.\n");
            return 1;
    }

    display(arr, n);
    return 0;
}