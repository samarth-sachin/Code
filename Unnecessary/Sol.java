package Unnecessary;

import java.util.*;

// User function Template for Java

class Sol {
    public static int search(int n, int arr[]) {
        int start=0;
        int end=arr.length-1;
        while(start<end)
        { int mid=start+(end-start)/2;
          if(arr[mid]!=arr[mid+1] && arr[mid]!=arr[mid-1]) return mid;
          else if(arr[mid]==arr[mid+1]) start=mid+2;
          else end=mid;

        }
        return start;
    }
      
}