public class maxmin {
    public static int setmax(int n,int []A){
int a=Integer.MAX_VALUE;
        for(int i=1;i<n;i++)
{if(A[i]<a)
    {a=A[i];
        
    }
}return a;

    }
    public static int setmin(int n,int[]A){
    int b=Integer.MIN_VALUE;
for(int i=1;i<n;i++){
    {
        if(A[i]<b)
        {b=A[i];

        }
    }
}    
return b;
}
    public static void main(String[] args) {
        int arr[]={3,6,2,8,10};
        int n=arr.length;
        System.out.println(setmin(n, arr));
        System.out.println(setmax(n, arr));
    }
    
}
