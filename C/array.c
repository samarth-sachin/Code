
#include <stdio.h>

void main()
{
    int row, column;
    int arr[30][30];
    int brr[30][30];
    int sum[30][30];

    printf("What is the count of rows: ");
    scanf("%d", &row);

    printf("What is the count of columns: ");
    scanf("%d", &column);

    printf("Enter the elements of the array:\n");
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            scanf("%d", &arr[i][j]);
        }
    }
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            scanf("%d", &brr[i][j]);
        }
    }
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            sum[i][j]=arr[i][j]+brr[i][j];
            printf("%d ", sum[i][j]);
        }
        printf("\n");
    }


    printf("The elements of the array are:\n");
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            printf("%d ", arr[j][i]);
        }
        printf("\n"); // Move to the next row
    }
//     #include <stdio.h>

// int main() {
//     int n;
//     printf("Enter size of square matrix (n x n): ");
//     scanf("%d", &n);

//     int a[n][n];
   

//     printf("Enter matrix elements:\n");
//     for(int i = 0; i < n; i++){
//         for(int j = 0; j < n; j++){
//             scanf("%d", &a[i][j]);
//         }
//     }

//     for(int i = 0; i < n; i++){
//         for(int j = 0; j < n; j++){
//             if(i > j && a[i][j] != 0){
//                 printf("the matrix is upper");
//             }
//             if(i < j && a[i][j] != 0){
               
//                 printf("the matrix is lower");
//             }
//             if(i != j && a[i][j] != 0){
//                 printf("the matrix is digonal");
//             }
//             if(i == j && a[i][j] == 0){
//                 printf("the matrix is digonal");
//             }
//         }
//     }}

}


