 public class findrotationinbinarysearch {
        public static void main(String[] args) {
            int[] arr = {1,2,3,4,5};
            int pivotIndex = findPivot(arr);
          pivotIndex=pivotIndex+1;
            System.out.println("it is rotated by:"+pivotIndex);
        }
    
        static int findPivot(int[] nums) {
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
    }
    

