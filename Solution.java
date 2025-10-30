import java.util.Arrays;

class Solution {

    public static int longestConsecutive(int[] arr) {
        Arrays.sort(arr);
        int count =0;
        int newxount=0;
        for(int i=1;i<arr.length;i++)
        { if(arr[i-1]+1==arr[i]) count++;
          else if(arr[i-1]+1!=arr[i]) newxount++;
        }
        return Math.max(count, newxount);
        
    }
    public static void main(String[]args)
    { System.out.println(longestConsecutive(new int[]{2, 6, 1, 9, 4, 5, 3}));

    }
}