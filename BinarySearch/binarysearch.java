public class binarysearch {
    public static void main(String[] args) {
        int arr[] = {4,5,6,7,0,1,2};
        int target = 0;
        int ans = binarySearch(arr, target);
        System.out.println(ans);
    }

    public static int binarySearch(int arr[], int target) {
        int start = 0;
        int end = arr.length-1;

        while (start <= end) {
            int mid = (start+end)/2;
            if (arr[mid] >= target &&arr[start]<=target) {
                end = mid - 1;
            } if (arr[mid] <= target &&  target<=arr[end]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
