public class guestcall {
    public static int callguest(int n)
    {
        if (n<=1)
        {
            return 1;
        }
        int single=callguest(n-1);
        int pairs=(n-1)*callguest(n-2);
        return single+pairs;
    }
    public static void main(String[] args) {
        int n=4;
        System.out.println(callguest(n));
    }
    
}
