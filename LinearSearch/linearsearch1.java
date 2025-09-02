

public class linearsearch1 {
    public static void main(String[] args) {
        int arr[]={4,2,6,3,};
        int ans=min(arr);
        System.out.println(ans);
    }
    static int min (int arr[])
    {
if(arr.length==0){
    return -1;
}


    int temp=arr[0];
    for(int i=0;i<arr.length;i++)
{
    if(arr[i]<temp)
    {
        temp=arr[i];
    }
    
}return temp;
    }
}
