class dp{
  public static int uniquePaths(int m, int n) {
        // if(m==0|| n==0) return 0;
        // if(m==1 || n==1) return 1;
        // int down=uniquePaths(m-1, n);
        // int up=uniquePaths(m, n-1);
        // return down+up;
        int dp[][]=new int[m][n];
        int down=0;
        int up=0;
        for(int i=0;i<m;i++)
        { dp[i][0]=1;
         
        }
        for(int i=0;i<n;i++)
        {dp[0][i]=1;
         
        }
        for(int i=1;i<m;i++)
        {
          for(int j=1;j<n;j++)
          {
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
           
          }
        }
        return dp[m-1][n-1];
    }
  public static void main(String[] args) {
      System.out.println(uniquePaths(3, 2));
  }
}