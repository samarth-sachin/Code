
public class two2dbinary {
    
    public static void main(String[] args) {
        // Sample matrix for testing
        int[][] matrix = {
            {1, 3, 5, 7},
            {10, 11, 16, 20},
            {23, 30, 34, 60}
        };
        
        int target = 16;
        int[] result = searchMatrix(matrix, target);
        
        if (result != null) {
            System.out.println("Target found at: (" + result[0] + ", " + result[1] + ")");
        } else {
            System.out.println("Target not found.");
        }
    }

    // Function to search for the target in the matrix
    static int[] searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0) {
            return null; // Return null if the matrix is empty or null
        }
        
        // Loop through each row and apply binary search
        for (int row = 0; row < matrix.length; row++) {
            int[] result = binarySearch(matrix, row, 0, matrix[row].length - 1, target);
            if (result != null) {
                return result; // Return result if found
            }
        }
        
        return null; // If target is not found in any row
    }

    // Binary search within a specific row
    static int[] binarySearch(int[][] matrix, int row, int cstart, int cend, int target) {
        while (cstart <= cend) {
            int mid = cstart + (cend - cstart) / 2;
            
            if (matrix[row][mid] == target) {
                return new int[] {row, mid}; // Target found
            } else if (matrix[row][mid] < target) {
                cstart = mid + 1; // Search in the right half
            } else {
                cend = mid - 1; // Search in the left half
            }
        }
        
        return null; // Return null if target is not found in this row
    }
}
