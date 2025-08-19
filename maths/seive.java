public class seive {
    public static void main(String[] args) {
        int n=20;
        boolean prime[]=new boolean[n+1];
        seiveof(n, prime);
    }
    public static void seiveof(int n,boolean []prime)
    {
        for(int i =2;i*i<=n;i++)
        { if(!prime[i])

            { for(int j=i*2;j<=n;j=j+i)
                {
                    prime[j]=true;
                }


            }
        }
        for(int i=2;i<=n;i++)
        {
            if(!prime[i])
            {
                System.out.println(i+" ");
            }
        }
    }
}
