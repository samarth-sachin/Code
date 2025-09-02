 public class rank {
    public static void rank(int[][] arr) {
        System.out.println("Rank method called.");

        int row = arr.length;
        int col = arr[0].length;
        int rank = col;

        for (int r = 0; r < row; r++) {
            if (arr[r][r] != 0) {
                for (int i = 0; i < row; i++) {
                    if (i != r) {
                        double factor = (double) arr[i][r] / arr[r][r];
                        for (int j = 0; j < col; j++) {
                            arr[i][j] -= factor * arr[r][j];
                        }
                    }
                }
            } else {
                rank--;
            }
        }

        System.out.println("Matrix Rank: " + rank);
    }

    public static void main(String[] args) {
        int[][] arr = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Calling rank method
        rank(arr);
    }
}
 