public class binarysearchfindsame {
    public static void main(String[] args) {
        int arr[] = {1, 4, 4, 7, 7, 7, 7, 8};
        int target = 4;
        int[] result = binarySearch(arr, target);
        System.out.println("First occurrence: " + result[0]);
        System.out.println("Last occurrence: " + result[1]);
    }

    public static int[] binarySearch(int[] arr, int target) {
        int[] result = {-1, -1};  // Default values in case target is not found
        result[0] = binary(arr, target, true);  // Find the first occurrence
        result[1] = binary(arr, target, false); // Find the last occurrence
        return result;
    }

    public static int binary(int[] arr, int target, boolean findStartIndex) {
        int ans = -1;
        int start = 0;
        int end = arr.length - 1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            
            if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else { // arr[mid] == target
                ans = mid;
                if (findStartIndex) {
                    end = mid - 1; // Keep searching on the left side
                } else {
                    start = mid + 1; // Keep searching on the right side
                }
            }
        }
        
        return ans;
    }
}
