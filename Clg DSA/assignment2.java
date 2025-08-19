class assignment2{
    public static int[] t(int arr[],int target)
    { for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr.length;j++)
            {
                if(arr[i]+arr[j]==target) return new int []{arr[i],arr[j]};
            }
        }
        return new int []{};

    }

    public static void main(String[] args) {
        int arr[]={3,5,-4,8,11,1,-1,7};
        int target=15;
        int s[]=t(arr, target);
        for(int i=0;i<s.length;i++)
        {
            System.out.println(s[i]);
        }
        

    }
}