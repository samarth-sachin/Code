public class infinitearray
{
public static void main(String[] args) {
    int arr[]={4,1,5,6,9,10};
    int target=5;
    System.out.println(ans(arr, target));
}
public static int ans(int arr[],int target)
{int start=0;
    int end=1;
while(arr[end]<target)
{
int temp=end+1;
end=end+(end-start+1)*2;
start=temp;


}
return binary(arr, target, start, end);
}
public static int binary(int arr[],int target,int start,int end)
{
    while(start<=end)
    {
int mid=start+(end-start)/2;
if(arr[mid]>target)
{
    end=mid-1;
}
else if(arr[mid]<target)
{
    start=mid+1;
}
else{
return mid;
}
    }
    return -1;
}
}