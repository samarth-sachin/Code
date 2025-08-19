public class duplicataesinpivotbinary {
     
        public static void main(String[] args) {
            int[] arr = {4, 5, 6, 7, 0, 1, 2, 2, 2};
            int pivotIndex = findPivotWithDuplicates(arr);
            System.out.println("Pivot index: " + pivotIndex);
        }
    
        static int findPivotWithDuplicates(int[] nums) {
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
                // If elements at mid, start, and end are equal, we can't decide which half to choose, so reduce the search space.
                if (nums[mid] == nums[start] && nums[mid] == nums[end]) {
                    // Check if start is pivot
                    if (nums[start] > nums[start + 1]) {
                        return start;
                    }
                    start++;
                    // Check if end is pivot
                    if (nums[end] < nums[end - 1]) {
                        return end - 1;
                    }
                    end--;
                }
                // Left half is sorted
                else if (nums[start] <= nums[mid]) {
                    if (nums[start] > nums[mid]) {
                        end = mid - 1;
                    } else {
                        start = mid + 1;
                    }
                }
                // Right half is sorted
                else {
                    if (nums[mid] > nums[end]) {
                        start = mid + 1;
                    } else {
                        end = mid - 1;
                    }
                }
            }
            return -1; // Pivot not found
        }
    }
    

