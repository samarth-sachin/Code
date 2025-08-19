public class linear {
    public static void main(String[] args) {
        int[] arr = {5, 2, 6, 4};
        int target = 5;
        int ans = linearSearch(arr, target, 1, 2);

        if (ans != -1) {
            System.out.println("Element found at index: " + ans);
        } else {
            System.out.println("Element not found in the given range.");
        }
    }

    public static int linearSearch(int[] arr, int target, int start, int end) {
        if (arr.length == 0) {
            return -1;
        }
        for (int i = start; i <= end; i++) {
            if (arr[i] == target) {
                return i; // Return the index where the element is found
            }
        }
        return -1; // Return -1 if the element is not found in the given range
    }
}
