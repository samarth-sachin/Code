import java.util.Arrays;

public class medianoftwosortedarray {
    static void mergeAndFindMedian(int[] n1, int[] n2) {
        int[] merged = new int[n1.length + n2.length];

        // Merging arrays
        for (int i = 0; i < n1.length; i++) {
            merged[i] = n1[i];
        }
        for (int i = 0; i < n2.length; i++) {
            merged[n1.length + i] = n2[i];
        }

        // Sorting the merged array
        Arrays.sort(merged);

        // Calculating the median
        double median;
        if (merged.length % 2 == 0) {
            int mid1 = merged.length / 2 - 1;
            int mid2 = merged.length / 2;
            median = (merged[mid1] + merged[mid2]) / 2.0;
        } else {
            median = merged[merged.length / 2];
        }

        // Printing the merged array and median
        System.out.println("Merged Array: " + Arrays.toString(merged));
        System.out.println("Median: " + median);
    }

    public static void main(String[] args) {
        int n1[] = {1, 3, 5, 7};
        int n2[] = {2, 4, 6, 8};
        mergeAndFindMedian(n1, n2);
    }
}
