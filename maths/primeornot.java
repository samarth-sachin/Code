public class primeornot {
    public static void main(String[] args) {
        int n=56;
        System.out.println(primeornot(n));
    }
    public static boolean primeornot(int n)
    {
        if(n<=1)
        {
            return false;
        }
        int c=2;
        while(c*c<=n)
        { if(n%c==0)
            {
                return false;
            }
            c++;

        }
        return true;
    }
}