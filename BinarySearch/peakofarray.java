public class peakofarray {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 4, 3, 2, 1};
        int pidx = peakArray(arr);
        System.out.println("Peak Index: " + pidx);
        System.out.println("Peak Value: " + arr[pidx]);
    }

    public static int peakArray(int[] nums) {
        int start = 0;
        int end = nums.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            // Check if mid is the peak element
            if ((mid == 0 || nums[mid - 1] <= nums[mid]) && (mid == nums.length - 1 || nums[mid + 1] <= nums[mid])) {
                return mid;
            }

            // If the element on the right is greater, move to the right half
            if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
                start = mid + 1;
            } 
            // If the element on the left is greater, move to the left half
            else {
                end = mid - 1;
            }
        }
        return -1; // This should never be reached if the array has a peak.
    }
}
