public class findpivot {
    public static void main(String[] args) {
        int arr[] = {6, 7, 1, 2, 3, 4, 5};
        int target = 3;
        System.out.println(pivot(arr, target));
    }

    static int pivot(int nums[], int target) {
        int pivot = findPivot(nums);
        if (pivot == -1) {
            // If no pivot is found, it means the array is not rotated
            return binarySearch(nums, target, 0, nums.length - 1);
        }
        // If pivot is found, you have found 2 ascending subarrays
        if (nums[pivot] == target) {
            return pivot;
        }
        if (target >= nums[0]) {
            return binarySearch(nums, target, 0, pivot - 1);
        }
        return binarySearch(nums, target, pivot + 1, nums.length - 1);
    }

    static int findPivot(int nums[]) {
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            // Check if mid is pivot
            if (mid < end && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            // Check if mid-1 is pivot
            if (mid > start && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }
            // Decide the search space
            if (nums[mid] <= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1; // Pivot not found
    }

    static int binarySearch(int arr[], int target, int start, int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                return mid;
            }
        }
        return -1; // Target not found
    }
}
