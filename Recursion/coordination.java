public class coordination {
    public static int countpaths(int i,int j,int n,int m)
    {if(i==n||j==m)
        {
            return 0;
        }
        if (i==n-1&&j==m-1)
        {return 1;
        }
    //move downwards
    int downwards=countpaths(i +1, j, n, m);
    //move rights
    int right=countpaths(i, j+1, n, m);
    return downwards+right;
    }
    public static void main(String[] args) {
       int m=3;int n=3;
        int ans=countpaths(0, 0, n, m);
        System.out.println(ans);
    }
    
}
