

public class sealingbinarysearch {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6};
        int target=3;
       int ans=binary(arr, target);
       System.out.println(ans);
    }
    public static int binary(int arr[],int target)
    {
        int start=0;
        int end=arr.length-1;
while(start<=end)
{int mid=start+(end-start)/2;
    if(arr[mid]>target)
    {
end =mid-1;
    }
   else if(arr[mid]<target)
    {
        start=mid+1;
    }
else{return mid;}
}
return arr[start];
    }
}
